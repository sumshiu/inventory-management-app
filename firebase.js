// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.firebaseKey,
  authDomain: "pantry-tracker-app-57956.firebaseapp.com",
  projectId: "pantry-tracker-app-57956",
  storageBucket: "pantry-tracker-app-57956.appspot.com",
  messagingSenderId: "490697093020",
  appId: "1:490697093020:web:11cf1fca6d6e40c94ee259",
  measurementId: "G-HHCCFZ16HE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export { firestore };
