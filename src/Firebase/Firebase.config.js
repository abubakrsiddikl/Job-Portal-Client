// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtNZDfDMGp0oVGMeVmilfJvkp8xUMKAro",
  authDomain: "job-portal-792da.firebaseapp.com",
  projectId: "job-portal-792da",
  storageBucket: "job-portal-792da.firebasestorage.app",
  messagingSenderId: "930099801363",
  appId: "1:930099801363:web:b3bc3eb7a7b8c44c9cfee6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
