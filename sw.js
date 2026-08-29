const CACHE_NAME = 'limnavi-v2'; // bump this number whenever you change ASSETS

const ASSETS = [
  './',
  './index.html',
  './pano.html',
  './manifest.json',
  './img/logo.png'
];

// External/CDN assets — cached separately so a failure here
// doesn't break the whole install like it would inside addAll()
const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',
  'https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css'
];

// Install Event - save local files to cache (must all succeed)
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(ASSETS);
      // cache external assets individually so one CDN hiccup
      // doesn't fail the entire install
      await Promise.all(
        EXTERNAL_ASSETS.map((url) =>
          fetch(url, { mode: 'no-cors' })
            .then((res) => cache.put(url, res))
            .catch((err) => console.warn('Skipped caching', url, err))
        )
      );
    })
  );
});

// Activate Event - clean up old cache versions
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch Event - serve from cache, fall back to network,
// and cache new same-origin GET requests as they're fetched
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;

      return fetch(e.request)
        .then((networkResponse) => {
          // only cache successful, same-origin responses
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            e.request.url.startsWith(self.location.origin)
          ) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return networkResponse;
        })
        .catch(() => caches.match('./index.html')); // offline fallback
    })
  );
});