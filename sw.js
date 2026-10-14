/* DietDost Service Worker v6: refresh the offline app shell so profile-photo code is available offline. */
const CACHE_NAME = "dietdost-shell-v8";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./icon.svg", "./images/recipes/chana-masala.jpg", "./images/recipes/easy-masala-chai.jpg", "./images/recipes/pumpkin-pie-latte.jpg", "./images/recipes/low-fat-hot-chocolate.jpg", "./images/recipes/basil-berry-lemonade-sorbet.jpg", "./images/recipes/banana-mug-cake.jpg", "./images/recipes/flourless-chocolate-walnut-cookies.jpg", "./images/recipes/gluten-free-chocolate-chip-cookies.jpg", "./images/recipes/peanut-butter-banana-ice-cream.jpg", "./images/recipes/low-calorie-indian-kulfi.jpg", "./images/recipes/caprese-salad.jpg", "./images/recipes/microwave-egg-muffin.jpg", "./images/recipes/greek-yogurt-berry-parfait.jpg", "./images/recipes/baked-apple-chips.jpg", "./images/recipes/almond-butter-energy-balls.jpg", "./images/recipes/baked-kale-chips.jpg", "./images/recipes/baked-sweet-potato-fries.jpg", "./images/recipes/cucumber-and-hummus-bites.jpg", "./images/recipes/greek-yogurt-fruit-dip.jpg", "./images/recipes/spiced-roasted-chickpeas.jpg", "./images/recipes/yogurt-parfait.jpg", "./images/recipes/chocolate-chia-pudding.jpg", "./images/recipes/no-bake-oatmeal-bars.jpg", "./images/recipes/quick-macaroni-salad.jpg", "./images/recipes/red-roasted-potatoes.jpg", "./images/recipes/tempeh-orek.jpg", "./images/recipes/stir-fried-cap-cay.jpg", "./images/recipes/boiled-tempeh-sambal.jpg", "./images/recipes/scrambled-eggs-with-spicy-vegetables.jpg", "./images/recipes/fried-konjac-noodles.jpg", "./images/recipes/quinoa-stuffed-bell-peppers.jpg", "./images/recipes/chive-smashed-potatoes.jpg", "./images/recipes/grilled-zucchini.jpg", "./images/recipes/easy-coleslaw.jpg", "./images/recipes/roasted-asparagus.jpg", "./images/recipes/aloo-matar.jpg", "./images/recipes/sauteed-cauliflower-with-garlic.jpg", "./images/recipes/sauteed-vegetables.jpg", "./images/recipes/spiced-chickpeas.jpg", "./images/recipes/boiled-chana-mix.jpg", "./images/recipes/cucumber-raita.jpg", "./images/recipes/air-fried-bhindi.jpg", "./images/recipes/baked-aloo-gobi.jpg", "./images/recipes/indian-chapati.jpg", "./images/recipes/air-fryer-pakoras.jpg", "./images/recipes/chicken-tacos.jpg", "./images/recipes/steamed-sea-bass.jpg", "./images/recipes/ayam-bakar-light.jpg", "./images/recipes/gulai-ayam-low-fat.jpg", "./images/recipes/gado-gado-light.jpg", "./images/recipes/indonesian-chicken.jpg", "./images/recipes/spicy-lemongrass-chicken.jpg", "./images/recipes/padang-style-gulai-cumi.jpg", "./images/recipes/hot-honey-chicken-and-rice-bowls.jpg", "./images/recipes/chicken-seekh-kabab.jpg", "./images/recipes/saag-paneer.jpg", "./images/recipes/paneer-kathi-roll.jpg", "./images/recipes/chicken-bhuna.jpg", "./images/recipes/tofu-tikka-masala.jpg", "./images/recipes/salmon-tikka.jpg", "./images/recipes/mutton-curry.jpg", "./images/recipes/salmon-rice-bowl.jpg", "./images/recipes/mediterranean-eggplant-stew.jpg", "./images/recipes/eggplant-potato-curry.jpg", "./images/recipes/quinoa-fried-rice.jpg", "./images/recipes/country-stewed-fish.jpg", "./images/recipes/lemon-chicken.jpg", "./images/recipes/thai-shrimp-in-coconut-milk.jpg", "./images/recipes/pan-fried-chicken-legs.jpg", "./images/recipes/grilled-salmon.jpg", "./images/recipes/blowtorch-steak.jpg", "./images/recipes/pan-fried-chicken-patties.jpg", "./images/recipes/turmeric-chicken.jpg", "./images/recipes/garlic-shrimp-pasta.jpg", "./images/recipes/methi-chicken.jpg", "./images/recipes/quinoa-biryani.jpg", "./images/recipes/mushroom-matar-malai.jpg", "./images/recipes/pecel-sayur-indonesian-vegetables.jpg", "./images/recipes/vanilla-almond-smoothie.jpg", "./images/recipes/chocolate-peanut-butter-smoothie.jpg", "./images/recipes/berry-coconut-smoothie.jpg", "./images/recipes/green-keto-smoothie.jpg", "./images/recipes/peanut-butter-and-jelly-smoothie.jpg", "./images/recipes/cucumber-smoothie.jpg", "./images/recipes/blueberry-matcha-shake.jpg", "./images/recipes/paleo-egg-and-veggie-muffins.jpg", "./images/recipes/avocado-toast.jpg", "./images/recipes/spinach-and-goat-cheese-egg-muffins.jpg", "./images/recipes/bubur-ayam-oats.jpg", "./images/recipes/telur-dadar-padang.jpg", "./images/recipes/nasi-kuning-brown-rice.jpg", "./images/recipes/spinach-and-egg-sandwich.jpg", "./images/recipes/mushroom-spinach-mini-savory-pies.jpg", "./images/recipes/turkish-eggs-with-greek-yogurt.jpg", "./images/recipes/oatmeal-with-greens-tomato-and-egg.jpg", "./images/recipes/whole-grain-berry-pancakes.jpg", "./images/recipes/lemon-rice.jpg", "./images/recipes/chilled-overnight-chia-pudding.jpg", "./images/recipes/peanut-butter-and-banana-toast.jpg", "./images/recipes/rava-dhokla-sprouted.jpg", "./images/recipes/idli-with-sambar.jpg", "./images/recipes/moong-dal-cheela.jpg", "./images/recipes/oats-upma.jpg", "./images/recipes/ragi-dosa.jpg", "./images/recipes/tomato-and-potato-soup.jpg", "./images/recipes/fresh-ginger-pumpkin-soup.jpg", "./images/recipes/cucumber-asparagus-chowder.jpg", "./images/recipes/tomato-basil-soup.jpg", "./images/recipes/sayur-sop-indonesian-vegetable-soup.jpg", "./images/recipes/instant-pot-potato-soup.jpg", "./images/recipes/creamy-broccoli-soup.jpg", "./images/recipes/mushroom-bisque.jpg", "./images/recipes/grilled-chicken-caesar-salad.jpg", "./images/recipes/greek-salad.jpg", "./images/recipes/arugula-grapefruit-salad.jpg", "./images/recipes/paleo-tuna-salad-lettuce-wraps.jpg", "./images/recipes/beet-and-goat-cheese-salad.jpg", "./images/recipes/quinoa-and-kale-salad.jpg", "./images/recipes/curry-and-tuna-salad-roll.jpg", "./images/recipes/indian-cucumber-salad.jpg", "./images/recipes/chocolate-covered-strawberries.jpg", "./images/recipes/stir-fried-indonesian-cabbage.jpg", "./images/recipes/scrambled-eggs-with-vegetables.jpg", "./images/recipes/roasted-edamame.jpg", "./images/recipes/low-fat-beef-rendang.jpg", "./images/recipes/creamy-pumpkin-cheese-soup.jpg", "./images/recipes/rajma-chawal.jpg", "./images/recipes/yogurt-oatmeal-with-toasted-almonds.jpg", "./images/recipes/quick-misal-pav.jpg", "./images/recipes/moong-chilla.jpg", "./images/recipes/smoothie.jpg", "./images/recipes/paneer-curry.jpg", "./images/recipes/paneer-bhurji.jpg", "./images/recipes/oats-bowl.jpg", "./images/recipes/nuts-snack.jpg", "./images/recipes/chana-salad.jpg", "./images/recipes/lunch-thali.jpg", "./images/fasting/fasting-food.jpg", "./images/fasting/fasting-clock.jpg", "./images/learn/water-guide.jpg", "./images/learn/nutrition-guide.jpg", "./images/learn/wellness.jpg", "./images/learn/healthy-eating.jpg", "./images/learn-library/learn-21.jpg", "./images/learn-library/learn-02.jpg", "./images/learn-library/learn-12.jpg", "./images/learn-library/learn-19.jpg", "./images/learn-library/learn-32.jpg", "./images/learn-library/learn-24.jpg", "./images/learn-library/learn-18.jpg", "./images/learn-library/learn-05.jpg", "./images/learn-library/learn-45.jpg", "./images/learn-library/learn-09.jpg", "./images/learn-library/learn-14.jpg", "./images/learn-library/learn-48.jpg", "./images/learn-library/learn-42.jpg", "./images/learn-library/learn-06.jpg", "./images/learn-library/learn-01.jpg", "./images/learn-library/learn-44.jpg", "./images/learn-library/learn-30.jpg", "./images/learn-library/learn-27.jpg", "./images/learn-library/learn-36.jpg", "./images/learn-library/learn-38.jpg", "./images/learn-library/learn-10.jpg", "./images/learn-library/learn-13.jpg", "./images/learn-library/learn-46.jpg", "./images/learn-library/learn-40.jpg", "./images/learn-library/learn-23.jpg", "./images/learn-library/learn-15.jpg", "./images/learn-library/learn-20.jpg", "./images/learn-library/learn-34.jpg", "./images/learn-library/learn-47.jpg", "./images/learn-library/learn-08.jpg", "./images/learn-library/learn-35.jpg", "./images/learn-library/learn-25.jpg", "./images/learn-library/learn-39.jpg", "./images/learn-library/learn-43.jpg", "./images/learn-library/learn-26.jpg", "./images/learn-library/learn-17.jpg", "./images/learn-library/learn-33.jpg", "./images/learn-library/learn-28.jpg", "./images/learn-library/learn-29.jpg", "./images/learn-library/learn-07.jpg", "./images/learn-library/learn-22.jpg", "./images/learn-library/learn-37.jpg", "./images/learn-library/learn-16.jpg", "./images/learn-library/learn-04.jpg", "./images/learn-library/learn-41.jpg", "./images/learn-library/learn-03.jpg", "./images/learn-library/learn-31.jpg", "./images/learn-library/learn-11.jpg", "./images/diet-plans/high-protein.jpg", "./images/diet-plans/heart-healthy.jpg", "./images/diet-plans/weight-loss.jpg", "./images/diet-plans/vegetarian.jpg", "./images/misc/hero-food.jpg", "./images/misc/food-bowl.jpg"];
const PHOTO_ASSETS = []; // All app imagery is now bundled locally.
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
