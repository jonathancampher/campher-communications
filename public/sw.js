// Service Worker for caching assets and offline experience
const CACHE_NAME = 'campher-communications-v5';

// Assets to cache immediately on service worker installation
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/src/critical.css',
  '/src/index.css',
  '/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png' // Logo
];

// Only process requests from our origin or allowed domains
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
    const networkResponse = await fetch(request, {
      // Add cache busting for non-HTML requests to avoid cached responses
      cache: request.mode === 'navigate' ? 'default' : 'no-store'
    });
    // Cache a copy of the response for future use if it's valid
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
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

// Install event - precache key resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(PRECACHE_ASSETS);
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

// Fetch event - implement stale-while-revalidate strategy for all requests
self.addEventListener('fetch', event => {
  // Skip non-GET requests and browser extension requests
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension') ||
      event.request.url.includes('extension') ||
      event.request.url.startsWith('http://localhost') ||
      !shouldHandleRequest(event.request.url)) {
    return;
  }

  // Special handling for JS and CSS files - network first for freshness
  if (event.request.url.endsWith('.js') || event.request.url.endsWith('.css')) {
    event.respondWith(
      cacheFirst(event.request.clone())
    );
    return;
  }

  // Handle image files with cache-first strategy for better performance
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          // Return cached version and update cache in background
          fetch(event.request).then(networkResponse => {
            if (networkResponse.ok) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse);
              });
            }
          }).catch(() => {});
          return cachedResponse;
        }
        
        // Not in cache, fetch from network
        return fetch(event.request).then(response => {
          // Don't cache if not a successful response
          if (!response || response.status !== 200) {
            return response;
          }

          // Cache the fetched resource
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
    );
    return;
  }

  // For HTML pages, use network-first strategy to ensure freshness
  if (event.request.destination === 'document' || 
      event.request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(cacheFirst(event.request.clone()));
    return;
  }

  // Default strategy for other assets - stale-while-revalidate
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
          // Cache the updated version
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        })
        .catch(() => {
          // If network fails and we have no cached response, return offline fallback
          if (!cachedResponse && event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      
      // Return the cached version or wait for network
      return cachedResponse || fetchPromise;
    })
  );
});

// Handle offline analytics by storing and resending when online
self.addEventListener('sync', event => {
  if (event.tag === 'sync-analytics') {
    event.waitUntil(syncAnalytics());
  }
});

// Function to resend stored analytics data
async function syncAnalytics() {
  try {
    const cache = await caches.open('analytics-cache');
    const requests = await cache.keys();
    
    await Promise.all(requests.map(async (request) => {
      try {
        await fetch(request);
        return cache.delete(request);
      } catch (error) {
        // Keep failed requests in cache to retry later
        console.error('Failed to resend analytics:', error);
      }
    }));
  } catch (error) {
    console.error('Error syncing analytics:', error);
  }
}
