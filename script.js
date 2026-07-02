// sw.js - Basic Service Worker for PWA Installation
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Chrome ki installation requirement poori karne ke liye fetch handler zaroori hai
  e.respondWith(fetch(e.request));
});
