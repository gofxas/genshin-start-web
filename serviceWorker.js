const WEB_CACHED = "Morseinput-web-cache";
const CACHE_LIST = [
  "/index.html",
  "/genshin.mp4",
];
self.addEventListener("activate", function (event) {
  console.log("ServiceWorker activated.");
});

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(WEB_CACHED).then(function (cache) {
      return cache.addAll(CACHE_LIST);
    })
  );
});

self.addEventListener("fetch", (e) => {});
