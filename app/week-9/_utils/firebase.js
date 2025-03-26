// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6eJzLnMkn0zS6bIZhn5nwQAMWXK8JQQw",
  authDomain: "cprg306-assignments-905e7.firebaseapp.com",
  projectId: "cprg306-assignments-905e7",
  storageBucket: "cprg306-assignments-905e7.firebasestorage.app",
  messagingSenderId: "729040537335",
  appId: "1:729040537335:web:fa8c3f097ead0888a875f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);