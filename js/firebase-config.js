import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ── PASTE YOUR FIREBASE CONFIG HERE ──
const firebaseConfig = {
  apiKey: "AIzaSyDVrBKlX1ie6vOrQI5T1qgjQUTU7u5TVI4",
  authDomain: "enova-dev.firebaseapp.com",
  projectId: "enova-dev",
  storageBucket: "enova-dev.firebasestorage.app",
  messagingSenderId: "334200976325",
  appId: "1:334200976325:web:0910cada66fddc10d451ac"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
