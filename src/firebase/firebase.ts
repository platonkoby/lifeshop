// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA6iDSihb9htlgNnxRceeJCCOs9ssnQUE",
  authDomain: "lifeshop-a32de.firebaseapp.com",
  projectId: "lifeshop-a32de",
  storageBucket: "lifeshop-a32de.appspot.com",
  messagingSenderId: "1045103024586",
  appId: "1:1045103024586:web:071c5f20c8ef08ace85733",
  measurementId: "G-14TMC10PH6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
