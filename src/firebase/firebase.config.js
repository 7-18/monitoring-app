import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdM0rj7cOqs8UB0mI2KjlsFOTk4MsS0ck",
  authDomain: "monitoring-test-be084.firebaseapp.com",
  projectId: "monitoring-test-be084",
  storageBucket: "monitoring-test-be084.appspot.com",
  messagingSenderId: "1009926550235",
  appId: "1:1009926550235:web:a0b1106b7d490c5cf992fe",
};

const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const db = getFirestore();
