import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyClN4Nkk37b4cW3sHRZGf60AJjr0XRyVR8',
  authDomain: 'prime-interaction-tracker.firebaseapp.com',
  databaseURL: 'https://prime-interaction-tracker.firebaseio.com',
  storageBucket: 'prime-interaction-tracker.appspot.com',
  messagingSenderId: '1049862653972'
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
