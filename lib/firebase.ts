import { getApp, getApps, initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const REAL_STORIES_REELS_COLLECTION = "real_stories_reels";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export function hasFirebaseConfig() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
}

export function getFirebaseStatus() {
  const enabled = hasFirebaseConfig();

  if (!enabled) {
    console.warn(
      "[VietHealth Reels] Firebase config is missing. Using fallback demo/in-memory data. Add NEXT_PUBLIC_FIREBASE_* values in .env.local.",
    );
  }

  return {
    enabled,
    collection: REAL_STORIES_REELS_COLLECTION,
  };
}

export function getFirebaseDb() {
  if (!hasFirebaseConfig()) return null;

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return getFirestore(app);
}
