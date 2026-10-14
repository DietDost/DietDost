DietDost — Video Reference Update (local test package)
======================================================

This package updates the existing DietDost app using the uploaded 20m50s app walkthrough as a reference.

Changes in this package:
- Keeps the current Recipes library and its categorized local image assets.
- Keeps the Learn library (8 topic groups / 48 guides) and local guide images.
- Adds a video-reference-inspired Daily Tasks block to Home: Water, Weight, Calories, Steps.
- Adds a Daily Insights row with locally stored Learn thumbnails and routes each insight to Learn search.
- Adds a Home shortcut to the fasting tracker.
- Daily task labels read the app's visible dashboard values rather than inventing separate totals.
- Service worker cache name bumped to dietdost-shell-v8 and includes all local image assets for offline availability.
- Existing localStorage data is not cleared by this update.

Important:
- This is a local test package. It has NOT been published to GitHub Pages.
- Replace the full package contents together; keep the `images` directory.
- Do not delete browser/site data. Do not uninstall the installed app.
- Test first in VS Code Live Server at http://127.0.0.1:5500/index.html.
- A full visual browser screenshot could not be produced in this execution environment, so please check the live local render on your PC.

Video review (source-derived):
- The video shows onboarding selections for goal, gender, weight, eating frequency and diet style.
- Home includes a fasting status/plan, Daily Task tiles (Water, Weight, Calorie, Steps), and Daily Insight cards.
- Dedicated views are shown for water intake and reminder settings, weight/body data with trend ranges, food diary/calendar and manual food logging.
- Learn is a grouped guide library with category See All screens, article detail, practical advice and fasting education.
- The video also shows optional premium upsells and home-screen widget styling. Those are not claimed as fully reproduced by this package.
