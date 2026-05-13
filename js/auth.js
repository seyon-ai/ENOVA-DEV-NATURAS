import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─── Auth State Guard ─────────────────────────────────────────────
export function requireAuth(redirectTo = "/login.html") {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (!user) { window.location.href = redirectTo; }
      else resolve(user);
    });
  });
}

export function requireGuest(redirectTo = "/dashboard.html") {
  onAuthStateChanged(auth, (user) => {
    if (user) window.location.href = redirectTo;
  });
}

// ─── Create User Profile in Firestore ────────────────────────────
async function createUserProfile(user, extra = {}) {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid: user.uid,
      displayName: user.displayName || extra.name || "Dev",
      email: user.email || "",
      phone: user.phoneNumber || "",
      photoURL: user.photoURL || "",
      xp: 0,
      level: 1,
      completedLessons: [],
      currentTrack: "html",
      joinedAt: serverTimestamp(),
      certificates: [],
      streak: 0,
      lastActiveDate: null,
      ...extra
    });
  }
}

// ─── Google Sign In ───────────────────────────────────────────────
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const result = await signInWithPopup(auth, provider);
  await createUserProfile(result.user);
  return result.user;
}

// ─── Email Sign Up ────────────────────────────────────────────────
export async function signUpWithEmail(name, email, password) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName: name });
  await createUserProfile(result.user, { displayName: name });
  return result.user;
}

// ─── Email Sign In ────────────────────────────────────────────────
export async function signInWithEmail(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

// ─── Phone Auth ───────────────────────────────────────────────────
export function setupRecaptcha(containerId) {
  if (window.recaptchaVerifier) {
    window.recaptchaVerifier.clear();
  }
  window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
    size: "invisible",
    callback: () => {},
    "expired-callback": () => { showToast("reCAPTCHA expired. Try again.", "error"); }
  });
  return window.recaptchaVerifier;
}

export async function sendOTP(phoneNumber) {
  const appVerifier = window.recaptchaVerifier;
  const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  window.confirmationResult = confirmation;
  return confirmation;
}

export async function verifyOTP(code) {
  const result = await window.confirmationResult.confirm(code);
  await createUserProfile(result.user);
  return result.user;
}

// ─── Sign Out ─────────────────────────────────────────────────────
export async function logout() {
  await signOut(auth);
  window.location.href = "/index.html";
}

// ─── Get Current User Profile ─────────────────────────────────────
export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// ─── Update XP ────────────────────────────────────────────────────
export async function addXP(uid, amount) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data();
  const newXP = (data.xp || 0) + amount;
  const newLevel = Math.floor(newXP / 500) + 1;
  await setDoc(ref, { xp: newXP, level: newLevel }, { merge: true });
  return { xp: newXP, level: newLevel };
}

// ─── Complete Lesson ──────────────────────────────────────────────
export async function completeLesson(uid, lessonId, xpReward) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data();
  const completed = data.completedLessons || [];
  if (completed.includes(lessonId)) return;
  const newCompleted = [...completed, lessonId];
  const newXP = (data.xp || 0) + xpReward;
  const newLevel = Math.floor(newXP / 500) + 1;
  await setDoc(ref, {
    completedLessons: newCompleted,
    xp: newXP,
    level: newLevel,
    lastActiveDate: serverTimestamp()
  }, { merge: true });
  return { completedLessons: newCompleted, xp: newXP, level: newLevel };
}
