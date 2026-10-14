DietDost Recipes - Reference Image Mapping Update

What's changed
- Extracted and reviewed the 48 screenshots in the supplied ZIP.
- Created 129 unique local recipe-image files from the supplied screenshots.
- Mapped each recipe image to one recipe title and one category based on the source screenshot category header.
- Removed duplicate recipe titles and visually duplicate crops from the recipe dataset.
- Rebuilt the Recipes library to show 4 preview cards per category.
- "See All" opens a dedicated full category page with all recipes in that category, a back button, and search.
- Local recipe image files are included in the package and added to the service-worker pre-cache list.
- Service-worker cache version bumped to dietdost-shell-v7.

Install for local testing
1. Back up your current project folder first. Do not clear browser storage or uninstall the app.
2. Extract this ZIP.
3. Copy index.html, sw.js, manifest.json, icon.svg, and the images folder into:
   C:\Scoreboard\Diet\latest file
4. If Windows asks, replace the files. Keep all nested images folders intact.
5. Open with VS Code Live Server at http://127.0.0.1:5500/index.html.
6. Press Ctrl+Shift+R.
7. Open Recipes, then tap See All for categories such as Main Course or Breakfast.

Notes
- This is a local test package; it has not been published to GitHub Pages.
- Existing user storage keys are not cleared by these changes.
- The audit CSV maps recipe title, source category, local image path, and originating screenshot.
