DietDost 490 Indian Food Photo Update

Only image assets and image mapping were updated. index.html and app logic were left unchanged.

The 490 food image paths now show photo-style crops taken from the supplied 35-tile reference collage. Food names map to the nearest visual/category match; the supplied collage does not contain 490 distinct dish-specific photographs, so some photo tiles are reused.

Assets: images/indian-food-gallery/*.svg (wrappers) and images/food-photo-tiles/*.jpg.


Recipe Breakfast image display fix (16 Oct 2026)
Updated the actual Recipes library data array for these Breakfast cards:
- Poha: images/indian-food-gallery/poha.jpg -> images/generated-breakfast/03-kanda-poha.png
- Idli: images/indian-food-gallery/idli.jpg -> images/generated-breakfast/01-idli.png
- Masala Dosa: images/indian-food-gallery/plain-dosa.jpg -> images/generated-breakfast/02-masala-dosa.png
The images are local files included in this ZIP. Replace the project files and hard-refresh the browser to test. This package has not been published to GitHub Pages.


Update: Removed duplicate-like Breakfast entry “Sweet Pongal”; retained “Ven Pongal” as the Pongal item. Breakfast list now has 69 items unless a replacement is added.

Update (20 Oct 2026): Logout/onboarding navigation fix
- Logout now resets the onboarding controller's internal step index to step 1, not just the visible step classes.
- Step visibility and aria-hidden state are synchronized when moving between onboarding screens.
- The reset returns to the welcome step, resets the progress display, hides the back button, and returns plan selection to Free without clearing profile/diary storage.
- Service worker cache version bumped; app shell (index.html, manifest.json, icon.svg) is cached during install so the offline navigation fallback has an actual cached index.html to serve.
- Static verification: ZIP integrity passed, all 17 inline JavaScript blocks and sw.js passed Node syntax checks, and all static image paths referenced by index.html resolve to files in this package.
- Limitation: automated real-browser end-to-end logout testing could not be completed in this environment. Test the logout button on a local deployment before publishing.
