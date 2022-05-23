import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXXN6ci90ZbLpHdCuLVwPcCZrstDkuOyQ",
  authDomain: "challenge-edb35.firebaseapp.com",
  projectId: "challenge-edb35",
  storageBucket: "challenge-edb35.appspot.com",
  messagingSenderId: "842071206473",
  appId: "1:842071206473:web:fc49faee6c3a80614bad98",
  measurementId: "G-2E0WNPP8MB",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };