// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DONOT Share config in public
const firebaseConfig = {
  apiKey: "AIzaSyADUxdKbWpZqIvrE83KVXleYhLVFLL4XoU",
  authDomain: "email-password-auth-7fdec.firebaseapp.com",
  projectId: "email-password-auth-7fdec",
  storageBucket: "email-password-auth-7fdec.firebasestorage.app",
  messagingSenderId: "337458165088",
  appId: "1:337458165088:web:91cea4f61dc5b62234da05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);