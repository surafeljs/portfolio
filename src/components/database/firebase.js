// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhI-HD8alihAx_tKNNUqF8z-f4uuFLAgE",
  authDomain: "data-e815d.firebaseapp.com",
  projectId: "data-e815d",
  storageBucket: "data-e815d.firebasestorage.app",
  messagingSenderId: "753023975950",
  appId: "1:753023975950:web:cf5024d202bb709d20b25f",
  measurementId: "G-720CBY2K3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
