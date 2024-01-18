// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// added to git ignore
const firebaseConfig = {
  apiKey: "AIzaSyBF3urCJTOaPlKwAy1ETjNMOgMi0y1YLjE",
  authDomain: "myproject-cbd6e.firebaseapp.com",
  projectId: "myproject-cbd6e",
  storageBucket: "myproject-cbd6e.appspot.com",
  messagingSenderId: "998104664451",
  appId: "1:998104664451:web:e49e5dd95fed936b1e4eb6",
  measurementId: "G-0G9HXJ0EF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

