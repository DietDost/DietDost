/* DietDost Service Worker v4: refresh the offline app shell so profile-photo code is available offline. */
const CACHE_NAME = "dietdost-shell-v4";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./icon.svg"];
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(APP_SHELL.map(async path => {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (response && response.ok) await cache.put(path, response);
      } catch (e) { /* Keep any already cached shell item. */ }
    }));
    // Wait for the app's Update Now control to activate this worker.
  })());
});
self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith("dietdost-shell-") && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, { cache: "no-store" });
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put("./index.html", response.clone());
          await cache.put("./", response.clone());
        }
        return response;
      } catch (error) {
        return (await caches.match(request)) || (await caches.match("./index.html")) || (await caches.match("./")) || new Response("DietDost is not available offline yet. Connect once to the internet and reopen the app.", {status: 503, headers: {"Content-Type":"text/plain; charset=utf-8"}});
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      return new Response("", {status: 503, statusText: "Offline"});
    }
  })());
});
