import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBspauMDLPcxJeqnPNhNYeXN-mT0S1ALnI",
  authDomain: "sincroday-7b818.firebaseapp.com",
  projectId: "sincroday-7b818",
  storageBucket: "sincroday-7b818.firebasestorage.app",
  messagingSenderId: "518354848324",
  appId: "1:518354848324:web:245410c8e1d4f7ae268a11",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
