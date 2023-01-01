// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5GBA-OQVQc19uHTDWW1GaVqHoTiRJ4V4",
  authDomain: "rn-todo-7b35a.firebaseapp.com",
  projectId: "rn-todo-7b35a",
  storageBucket: "rn-todo-7b35a.appspot.com",
  messagingSenderId: "1052714857340",
  appId: "1:1052714857340:web:b9a14e596e14c8d44deaf9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
