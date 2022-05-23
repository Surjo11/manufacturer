import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALGkqWBV5GICUWhcUNt8Gma5JHWPEP6-I",
  authDomain: "bit-by-bit-manufacturer.firebaseapp.com",
  projectId: "bit-by-bit-manufacturer",
  storageBucket: "bit-by-bit-manufacturer.appspot.com",
  messagingSenderId: "522781340181",
  appId: "1:522781340181:web:c73c34b3255d6ca926541c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
