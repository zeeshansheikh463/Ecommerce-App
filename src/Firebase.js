import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5Nd1ilz1fwAsWiuf3-gyYCvrK9HqqKls",
  authDomain: "ecommerce-app-fd119.firebaseapp.com",
  projectId: "ecommerce-app-fd119",
  storageBucket: "ecommerce-app-fd119.appspot.com",
  messagingSenderId: "214049595116",
  appId: "1:214049595116:web:5ceb97d6cf58b47a930fc9",
  measurementId: "G-RE34Y5C2ZZ",
  databaseURL:"https://ecommerce-app-fd119-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);