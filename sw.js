var cacheName = 'task-track_0_1_3';

var filesToCache = [
  './',
  'index.html',
  'css/style.css',
  'js/main.js',
  'js/table.js',
  'manifest.json',
  'sw.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});


self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', function(event) {
  console.log('New SW active')
  caches.keys().then(function(names) {
    for (let name of names)
        if(name!=cacheName){
          caches.delete(name);
        }
  });
});