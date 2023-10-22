// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQfOjEYA-C5FCLwYoH0HGexKsDY3iyw-E",
  authDomain: "login-form-f0013.firebaseapp.com",
  projectId: "login-form-f0013",
  storageBucket: "login-form-f0013.appspot.com",
  messagingSenderId: "233206534120",
  appId: "1:233206534120:web:489b766d693e9848571e5d",
  measurementId: "G-QLFDGLKNC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};