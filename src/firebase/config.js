// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVswBIH4pxLGHN9T9MnmaCz60HY2hpjGY",
  authDomain: "books-6c5bc.firebaseapp.com",
  projectId: "books-6c5bc",
  storageBucket: "books-6c5bc.appspot.com",
  messagingSenderId: "48482785302",
  appId: "1:48482785302:web:d720ba96a282b19ad5bd37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);