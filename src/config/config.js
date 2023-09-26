// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHU9iFjWpFW1XsPQGkxeL1lCRgftmUZ4c",
  authDomain: "reactfirebase-d8b03.firebaseapp.com",
  projectId: "reactfirebase-d8b03",
  storageBucket: "reactfirebase-d8b03.appspot.com",
  messagingSenderId: "594006820809",
  appId: "1:594006820809:web:eb39fb9858d04ccef88a18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()