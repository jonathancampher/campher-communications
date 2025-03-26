
// Service Worker for caching assets and offline experience
const CACHE_NAME = 'campher-communications-v1';

// Assets to cache immediately on service worker installation
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/src/index.css',
  '/src/critical.css',
  '/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png',
  '/lovable-uploads/prosjekt1.webp'
];

// Runtime caching strategy - Network first with cache fallback
const cacheFirst = async (request) => {
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
    if (request.headers.get('Accept').includes('text/html')) {
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
      event.request.url.startsWith('http://localhost')) {
    return;
  }

  // Handle API calls and HTML pages with network-first strategy
  if (event.request.url.includes('api.netlify.com') || 
      event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(cacheFirst(event.request.clone()));
    return;
  }

  // For all other assets, use cache-first strategy
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached version and update cache in background
        const fetchPromise = fetch(event.request).then(networkResponse => {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        }).catch(() => {
          // Failed to update cache, but we already have the cached version
          return cachedResponse;
        });
        // Return cached response immediately
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
      });
    })
  );
});

// Handle offline fallback
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/index.html');
      })
    );
  }
});
