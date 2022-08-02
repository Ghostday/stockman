import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import environment variables from dotenv
// require('dotenv').config();
// import * as dotenv from 'dotenv';
// dotenv.config()
console.log(import.meta.env)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_apiKey,
  authDomain: import.meta.env.FIREBASE_authDomain,
  projectId: import.meta.env.FIREBASE_projectId,
  storageBucket: import.meta.env.FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.FIREBASE_messagingSenderId,
  appId: import.meta.env.FIREBASE_appId,
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log(firebase)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();