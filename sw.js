self.addEventListener('install', () => console.log('SW installed'));
self.addEventListener('activate', () => console.log('SW activated'));
self.addEventListener('fetch', event => event.respondWith(fetch(event.request)));
