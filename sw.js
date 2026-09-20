// Service Worker Cleanup & Cache Clearer
// Proactively purges all old caches and unregisters to prevent stale scripts
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim())
  );
});

// Always route directly to the network without serving stale cache
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(err => {
      // In sandboxed/offline preview or aborted fetches, return empty or pass through
      return new Response('', { status: 408, statusText: 'Network request skipped' });
    })
  );
});

