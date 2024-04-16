// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-clone-4b960.firebaseapp.com",
  projectId: "netflix-clone-4b960",
  storageBucket: "netflix-clone-4b960.appspot.com",
  messagingSenderId: "530259412486",
  appId: "1:530259412486:web:6946a04049560e20ab6587",
  measurementId: "G-QGTBYNJFN3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();