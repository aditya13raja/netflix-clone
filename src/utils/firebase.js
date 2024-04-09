// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcfLQ2cz-xmhU-AwAyQt6iZm050pdBQik",
  authDomain: "netflix-clone-4b960.firebaseapp.com",
  projectId: "netflix-clone-4b960",
  storageBucket: "netflix-clone-4b960.appspot.com",
  messagingSenderId: "530259412486",
  appId: "1:530259412486:web:6946a04049560e20ab6587",
  measurementId: "G-QGTBYNJFN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();