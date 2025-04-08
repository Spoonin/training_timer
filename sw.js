const CACHE_NAME = 'training-timer-v1';
const GPATH = '/training-timer';

const URLS =[
    `${GPATH}/`,
    `${GPATH}/index.html`,
    `${GPATH}/session.html`,
    `${GPATH}/session-edit.html`,
    `${GPATH}/manifest.json`,
]
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
