/* DietDost Service Worker v10: refresh shell for nutrition-label OCR and wellness updates. */
const CACHE_NAME = "dietdost-shell-v10";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./icon.svg"];
const PHOTO_ASSETS = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=360&q=75",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=360&q=75",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=360&q=75",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=360&q=75",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=82"
];
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(APP_SHELL.map(async path => {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (response && response.ok) await cache.put(path, response);
      } catch (e) { /* Keep any already cached shell item. */ }
    }));
    await Promise.all(PHOTO_ASSETS.map(async url => {
      try {
        const request = new Request(url, { mode: "no-cors", cache: "no-store" });
        const response = await fetch(request);
        if (response && (response.ok || response.type === "opaque")) await cache.put(url, response);
      } catch (e) { /* Photos are decorative; app functionality remains available without them. */ }
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
  if (url.origin === "https://images.unsplash.com") {
    event.respondWith((async () => {
      const cached = await caches.match(request) || await caches.match(url.href);
      if (cached) return cached;
      try {
        const response = await fetch(request, { mode: "no-cors" });
        if (response && (response.ok || response.type === "opaque")) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }
        return response;
      } catch (error) {
        return new Response("", { status: 503, statusText: "Photo unavailable offline" });
      }
    })());
    return;
  }
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
