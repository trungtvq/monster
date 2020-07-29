// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAnr5HDbAz3-FueSWyJozHCRy3LNVcJtlc",
    authDomain: "refer-web.firebaseapp.com",
    databaseURL: "https://refer-web.firebaseio.com",
    projectId: "refer-web",
    storageBucket: "refer-web.appspot.com",
    messagingSenderId: "738408564499",
    appId: "1:738408564499:web:c10b4c0c62aaaa09befce6",
    measurementId: "G-ZNLK4KBRD2"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();