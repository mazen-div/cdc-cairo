// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6qSqH5nOsSPTYHgHO4ZdKeZnW2hn55EA",
  authDomain: "cdcdash-173d9.firebaseapp.com",
  projectId: "cdcdash-173d9",
  storageBucket: "cdcdash-173d9.appspot.com",
  messagingSenderId: "31593777303",
  appId: "1:31593777303:web:46efbe588d4268736d01d2",
  measurementId: "G-M8EC0C62FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {storage, db };