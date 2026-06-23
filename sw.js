// Service Worker required for Chrome PWA Installation
const CACHE_NAME = 'wowburger-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Keeps the app stable by serving assets normally
  e.respondWith(fetch(e.request));
});
