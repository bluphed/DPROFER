// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJo0z_yuermDV-dnO5msGkzM01Tr3feGo",
  authDomain: "dprofer-7bea9.firebaseapp.com",
  projectId: "dprofer-7bea9",
  storageBucket: "dprofer-7bea9.firebasestorage.app",
  messagingSenderId: "788368470526",
  appId: "1:788368470526:web:e0b7f6e648f04f2ef150af",
  measurementId: "G-VJ0HGKW9NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
