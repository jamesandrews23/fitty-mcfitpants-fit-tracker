# Fitty McFitpants Fitness Tracker

Have you ever been sick and tired of being sick and tired? Wish you could keep track of all the healthy things you're doing so you know where you've been? This simple Nuxt.js app allows you to track your healthy progress through a simple Vuejs user interface. When you complete an activity, like taking your supplements or working out, you can add a new activity card to your timeline. Check out the app on github pages [here](https://jamesandrews23.github.io/fitty-mcfitpants-fit-tracker/).

# Storage

Fitty uses the browser's LocalStorage to store your timeline. When you save a card to your timeline it is serialized as JSON and persisted to LocalStorage for later retrieval. Future plans are to incorporate google signon with google drive.
