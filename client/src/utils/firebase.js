
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-61613.firebaseapp.com",
  projectId: "fir-61613",
  storageBucket: "fir-61613.firebasestorage.app",
  messagingSenderId: "567566838640",
  appId: "1:567566838640:web:c626e2aea7eb58c8f57db5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}