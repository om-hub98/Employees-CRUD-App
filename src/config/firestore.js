// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID

  // apiKey: "AIzaSyCTlW3e3VCA3WmPks8LYZmFiUu8ubwn9y4",
  // authDomain: "employee-database-13ffa.firebaseapp.com",
  // projectId: "employee-database-13ffa",
  // storageBucket: "employee-database-13ffa.appspot.com",
  // messagingSenderId: "366471867143",
  // appId: "1:366471867143:web:d1a4bc2127976772f5b3a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);