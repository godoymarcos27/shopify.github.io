
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDM5WYi2j4LeA-WXEGjbeHe_QWcIcbAfjc",
  authDomain: "data-facebook-97936.firebaseapp.com",
  projectId: "data-facebook-97936",
  storageBucket: "data-facebook-97936.appspot.com",
  messagingSenderId: "767079984114",
  appId: "1:767079984114:web:46e9011e8b0a9b6c95596b"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)