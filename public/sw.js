
// Service Worker for caching assets and offline experience
const CACHE_NAME = 'campher-communications-v5';

// Assets to cache immediately on service worker installation
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/src/critical.css',
  '/src/index.css'
];

// Critical assets to precache on activation
const CRITICAL_ASSETS = [
  '/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png', // Logo
  '/lovable-uploads/prosjekt1.webp' // First project image
];

// Skip external requests that might be blocked by CSP
const shouldHandleRequest = (url) => {
  // Skip external domains that might be blocked by CSP
  const skipDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'cdn.gpteng.co',
    'placehold.co',
    'api.netlify.com'
  ];
  
  // Check if URL contains any of the skip domains
  return !skipDomains.some(domain => url.includes(domain));
};

// Runtime caching strategy - Network first with cache fallback
const cacheFirst = async (request) => {
  // Skip handling requests that might be blocked by CSP
  if (!shouldHandleRequest(request.url)) {
    // For excluded domains, just pass through to network without trying to cache
    return fetch(request);
  }

  const cache = await caches.open(CACHE_NAME);
  try {
    // Try to get fresh content from network
    const networkResponse = await fetch(request);
    // Cache a copy of the response for future use
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    // Network failed, try to return from cache
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // If request is not in cache and network is unavailable, return offline page
    if (request.headers.get('Accept')?.includes('text/html')) {
      return caches.match('/index.html');
    }
    // For other resources, simply fail
    throw error;
  }
};

// Optimized cache-first strategy for images and static assets
const staticCacheFirst = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Return cached version immediately
    return cachedResponse;
  }
  
  // Not in cache, fetch from network
  try {
    const networkResponse = await fetch(request);
    // Cache the response for future use if it's valid
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Network failed and no cache available
    throw error;
  }
};

// Install event - precache key resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Precache core app assets
        return cache.addAll([...PRECACHE_ASSETS, ...CRITICAL_ASSETS]);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement improved caching strategies
self.addEventListener('fetch', event => {
  // Skip non-GET requests and browser extension requests
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension') ||
      event.request.url.includes('extension') ||
      event.request.url.startsWith('http://localhost') ||
      !shouldHandleRequest(event.request.url)) {
    return;
  }

  // Static assets - use cache-first strategy
  const url = new URL(event.request.url);
  const isImage = /\.(jpe?g|png|gif|svg|webp|avif|ico)$/i.test(url.pathname);
  const isFont = /\.(woff2?|ttf|otf|eot)$/i.test(url.pathname);
  const isStaticAsset = isImage || isFont || /\.(css|js)$/i.test(url.pathname);
  
  if (isStaticAsset) {
    event.respondWith(staticCacheFirst(event.request));
    return;
  }

  // API calls and HTML pages - use network-first strategy
  if (event.request.url.includes('api.netlify.com') || 
      event.request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(cacheFirst(event.request.clone()));
    return;
  }

  // For all other assets, use stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return cached response immediately if available
      if (cachedResponse) {
        // Update cache in background
        fetch(event.request)
          .then(networkResponse => {
            if (networkResponse.ok) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {/* Ignore network errors */});
          
        return cachedResponse;
      }

      // Not in cache, fetch from network
      return fetch(event.request).then(response => {
        // Don't cache if not a successful response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Cache the fetched resource
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        // If HTML, return offline page
        if (event.request.headers.get('Accept')?.includes('text/html')) {
          return caches.match('/index.html');
        }
        throw new Error('Network and cache fetch failed');
      });
    })
  );
});

// Handle resource prefetching
self.addEventListener('message', event => {
  // Check if message is requesting to prefetch resources
  if (event.data && event.data.type === 'PREFETCH_ASSETS' && Array.isArray(event.data.urls)) {
    // Get the list of URLs to prefetch
    const urls = event.data.urls;
    
    // Open the cache
    caches.open(CACHE_NAME).then(cache => {
      // Fetch and cache each URL
      urls.forEach(url => {
        fetch(url)
          .then(response => {
            if (response.ok) {
              cache.put(url, response);
            }
          })
          .catch(() => {/* Ignore errors for prefetching */});
      });
    });
  }
});
