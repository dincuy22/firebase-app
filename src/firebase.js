import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmPC_OjfgKNKZpy4y8OAZs7YbavJEF3oo",
  authDomain: "undangan-23f8e.firebaseapp.com",
  projectId: "undangan-23f8e",
  storageBucket: "undangan-23f8e.appspot.com",
  messagingSenderId: "537369419804",
  appId: "1:537369419804:web:bc268fd2f6407ee4e87fd9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
