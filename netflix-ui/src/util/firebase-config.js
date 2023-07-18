// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD59sMEX-oXXv2oGNrPQ3oLvspA_UJXTe4",
  authDomain: "react-netflix-clone-d6d31.firebaseapp.com",
  projectId: "react-netflix-clone-d6d31",
  storageBucket: "react-netflix-clone-d6d31.appspot.com",
  messagingSenderId: "291567366488",
  appId: "1:291567366488:web:1bc24862158b3f82f9352d",
  measurementId: "G-TQJ4ZFPEWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);