import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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