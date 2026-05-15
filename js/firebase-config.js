// ============================================
// ENOVA Dev — Firebase Configuration
// ONLY edit this file — paste your Firebase config here
// Firebase Console → Project Settings → Your Apps → SDK setup
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVrBKlX1ie6vOrQI5T1qgjQUTU7u5TVI4",
  authDomain: "enova-dev.firebaseapp.com",
  projectId: "enova-dev",
  storageBucket: "enova-dev.firebasestorage.app",
  messagingSenderId: "334200976325",
  appId: "1:334200976325:web:0910cada66fddc10d451ac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
