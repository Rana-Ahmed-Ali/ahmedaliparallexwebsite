const CACHE_NAME = 'ahmed-ali-portfolio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/projects.html',
  '/contact.html',
  '/404.html',
  '/assets/css/global.css',
  '/assets/css/index.css',
  '/assets/css/projects.css',
  '/assets/css/contact.css',
  '/assets/css/error.css',
  '/assets/images/wallpaper.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
