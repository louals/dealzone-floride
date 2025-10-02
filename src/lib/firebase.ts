// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSvulo0J9LB0qUcCL9EuC8lq5vOP_RWis",
  authDomain: "dealzone-floride.firebaseapp.com",
  projectId: "dealzone-floride",
  storageBucket: "dealzone-floride.firebasestorage.app",
  messagingSenderId: "452360771724",
  appId: "1:452360771724:web:d499b803d31c4c93a5c3a9",
  measurementId: "G-044MTYJSL5"
};

// 🚀 Init Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// 🔑 Auth
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// 🔥 Firestore
export const db = getFirestore(app);

// 📦 Storage
export const storage = getStorage(app);
