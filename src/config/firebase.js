// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYSysoLk-WMgbj0RCnuTnXjJYqdktAvkw",
  authDomain: "chat-app-607ca.firebaseapp.com",
  projectId: "chat-app-607ca",
  storageBucket: "chat-app-607ca.appspot.com",
  messagingSenderId: "822838702010",
  appId: "1:822838702010:web:135d4424b1245f5cd8b783",
  measurementId: "G-7BMBY0PS49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const storage = getStorage();
