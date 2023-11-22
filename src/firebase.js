// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWRAaLMTRBBLM5wKWYCZusrdfVkJjLa9w",
    authDomain: "perfect-pair-7d538.firebaseapp.com",
    projectId: "perfect-pair-7d538",
    storageBucket: "perfect-pair-7d538.appspot.com",
    messagingSenderId: "262130468896",
    appId: "1:262130468896:web:b96ec471a596a02f299445",
    measurementId: "G-1BKFGWL6KP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };