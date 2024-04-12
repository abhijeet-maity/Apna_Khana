// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC3oy-Vs3zsSImBQ9gnU_mDapSxdL3lhE",
  authDomain: "loginviaemailandpassword.firebaseapp.com",
  projectId: "loginviaemailandpassword",
  storageBucket: "loginviaemailandpassword.appspot.com",
  messagingSenderId: "934456317174",
  appId: "1:934456317174:web:7cf17b085fc3321dc348d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};