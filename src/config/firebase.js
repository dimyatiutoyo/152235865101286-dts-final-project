// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-fyVXmfHkViQaQtEj16OJ3Ukyoh5tueY",
  authDomain: "dts-final-project-d1d99.firebaseapp.com",
  projectId: "dts-final-project-d1d99",
  storageBucket: "dts-final-project-d1d99.appspot.com",
  messagingSenderId: "557356419323",
  appId: "1:557356419323:web:e9c2dd323d6bea0e8c085e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };