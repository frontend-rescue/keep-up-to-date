'use strict';

importScripts('/serviceworker-cache-polyfill.js');

var CACHE_NAME = 'frontendrescue';
var CACHE_VERSION = '0.0.2';

var urlsToCache = [
  '/',
  '/src/css/styles.min.css',
  '/src/css/data-uri.css',
  '/src/assets/no-image.png',
  '/favicon.ico'
];

/**
 * Install
 */
this.addEventListener('install', function(eve) {
  var urls = urlsToCache.map(function(url) {
    return new Request(url, {credentials: 'include'});
  });
  eve.waitUntil(
    caches.open(CACHE_NAME + '-v' + CACHE_VERSION)
      .then(function(cache) {
        return cache.addAll(urls);
      })
  );
});

/**
 * Active / Remove old caches
 */
this.addEventListener('activate', function(eve) {
  var currentCacheName = CACHE_NAME + '-v' + CACHE_VERSION;
  caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        if (cacheName != currentCacheName) {
          return caches.delete(cacheName);
        }
      })
    );
  });
});

/**
 * Fetch
 */
this.addEventListener('fetch', function(eve) {
  var request = eve.request;
  var url = new URL(request.url);
  eve.respondWith(
    caches.match(request).then(function(response) {
      return response || fetch(request);
    })
  );
});
