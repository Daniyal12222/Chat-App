// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZAI02pI8CUWyP8YEjEjNv1nXlb8VZ6bc",
  authDomain: "test-43a6f.firebaseapp.com",
  projectId: "test-43a6f",
  storageBucket: "test-43a6f.appspot.com",
  messagingSenderId: "922853907642",
  appId: "1:922853907642:web:ea4751f7a453739a76b683"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


//  fire base config