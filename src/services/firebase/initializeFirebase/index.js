import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import '@firebase/messaging';

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
var app
export const initializeFirebase = () => {
  app = firebase.initializeApp(firebaseConfig);
}



export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging =  app.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }