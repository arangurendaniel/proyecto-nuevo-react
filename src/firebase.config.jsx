// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDymje2CfURl4DvfsBBHVGWbuAwD8_9yVU",
  authDomain: "memes-house-24530.firebaseapp.com",
  projectId: "memes-house-24530",
  storageBucket: "memes-house-24530.appspot.com",
  messagingSenderId: "339127219473",
  appId: "1:339127219473:web:e3cd8716c54ee2ca6a88b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);