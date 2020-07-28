import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    // taken from your project settings --> cloud messaging
    apiKey: "AIzaSyAnr5HDbAz3-FueSWyJozHCRy3LNVcJtlc",
      authDomain: "refer-web.firebaseapp.com",
      databaseURL: "https://refer-web.firebaseio.com",
      projectId: "refer-web",
      storageBucket: "refer-web.appspot.com",
      messagingSenderId: "738408564499",
      appId: "1:738408564499:web:c10b4c0c62aaaa09befce6",
      measurementId: "G-ZNLK4KBRD2"
  });
}
navigator.serviceWorker
    .register('./firebase-messaging-sw.js')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });
    
export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }