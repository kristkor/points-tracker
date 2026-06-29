// FREE cloud storage — Firebase Spark plan ($0, no credit card needed)
//
// Setup (5 minutes):
// 1. Go to https://console.firebase.google.com → Create project
// 2. Build → Realtime Database → Create database → Start in test mode
// 3. Project settings (gear) → Your apps → Web (</>) → Register app
// 4. Copy the firebaseConfig object below
// 5. Copy this file to config.js and paste your values
//
// Lock down later (optional): Realtime Database → Rules:
//   { "rules": { "points-tracker": { ".read": true, ".write": true } } }

window.APP_CONFIG = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
  },
  teamId: "team",
};
