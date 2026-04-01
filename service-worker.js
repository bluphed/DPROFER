const CACHE_NAME = 'dprofer-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'imagenes/icon-512.png',
  'imagenes/icon-192.png',
  'imagenes/icon-144.png',
  'imagenes/icon-96.png',
  'imagenes/icon-72.png',
  'imagenes/icon-48.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos cacheados');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
