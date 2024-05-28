// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzoG183JQS9K2PliZQSe2NnteyVr4NQg8",
  authDomain: "mywedding-144c2.firebaseapp.com",
  projectId: "mywedding-144c2",
  storageBucket: "mywedding-144c2.appspot.com",
  messagingSenderId: "130439074303",
  appId: "1:130439074303:web:3f1fd6c7b1f8a3432f57ca",
  measurementId: "G-56XW8DPW91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Obtiene la instancia de autenticación
const auth = getAuth(app);

export { auth, app };