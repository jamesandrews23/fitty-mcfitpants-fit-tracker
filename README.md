# Fitty McFitpants Fitness Tracker

Have you ever been sick and tired of being sick and tired? Wish you could keep track of all the healthy things you're doing so you know where you've been? This simple Nuxt.js app allows you to track your healthy progress through a simple Vuejs user interface. When you complete an activity, like taking your supplements or working out, you can add a new activity card to your timeline. 

# Storage

Fitty uses the browser's localStorage to store your timeline. When you save a card to your timeline it is serialized as JSON and persisted to LocalStorage for later retrieval. Future plans are to incorporate google signon with google drive.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
