// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjWtoqk0h10gx6hlTVPt-THYOoeNlMGLg",
  authDomain: "netflix-9f8cd.firebaseapp.com",
  projectId: "netflix-9f8cd",
  storageBucket: "netflix-9f8cd.appspot.com",
  messagingSenderId: "703758962622",
  appId: "1:703758962622:web:34932d1a1e20ee12de73ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth()
export default db;