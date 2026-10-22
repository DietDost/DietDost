DIETDOST — FINAL MASTER PROJECT PACKAGE
Version: 22 October 2026
Food catalogue target: 298 unique foods

THIS IS THE CURRENT MASTER ZIP
Use this archive as the current consolidated project package instead of older DietDost ZIP versions. It contains the app files, assets, final 298-food list, image map, manifest and service worker.

START HERE
1. Extract the entire ZIP into one folder. Do not move images/ away from index.html.
2. Open index.html locally for a basic preview. Some PWA/service-worker behaviour requires HTTPS or localhost.
3. For GitHub Pages, replace the existing project files with the extracted files while keeping the repository structure. Publish only when you choose to.
4. After publishing, open the live site online once and allow it to reload/update; then test the installed mobile PWA. This ZIP has NOT been published to GitHub Pages by this package operation.

WHAT IS INCLUDED
- index.html: current consolidated app build, with the embedded food catalogue set to 298 entries.
- sw.js: updated service worker cache version dietdost-static-catalog301, intended to refresh older cached app versions.
- manifest.json and icon.svg.
- images/: app images and food/learning assets.
- DietDost_298_Food_Image_Map.xlsx and .csv.
- DietDost_Final_Unique_Indian_Food_List.csv: final 298-row food list.
- DIETDOST_IMAGE_UPDATE_LOG.txt.

IMPORTANT VERIFICATION NOTES
- Both final food CSV files contain 298 data rows.
- The ZIP passed archive integrity checking and JavaScript syntax checks in the current build process.
- The embedded app food list has 298 entries. Image paths were checked for file existence within this ZIP, but that does NOT mean every image is a unique or perfectly matching photograph. Some entries use category/fallback images; image identity should be reviewed if exact dish-specific photos are required.
- The current app code and assets are consolidated here, but a complete real-device test of every feature, offline mode, service-worker update prompt, profile photo offline behaviour, and live GitHub Pages deployment has not been completed.
- Existing user data is stored in the browser/device. This ZIP does not contain or back up a user's localStorage data. Do not clear browser/site data while replacing files.
- Budget assumption remains ₹0; no paid service is required by this ZIP itself.

PROJECT PRESERVATION
Keep this ZIP until you have extracted it and confirmed the files are present. For safety, do not delete your existing project folder/repository or browser data just because you downloaded this archive. This package is a project-file backup, not a backup of the data saved inside the installed app.
