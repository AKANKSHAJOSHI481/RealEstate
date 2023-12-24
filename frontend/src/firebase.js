// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-enclave.firebaseapp.com",
  projectId: "estate-enclave",
  storageBucket: "estate-enclave.appspot.com",
  messagingSenderId: "838661651021",
  appId: "1:838661651021:web:2dec7beb35376fbdd8ba04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.js
export default app;
