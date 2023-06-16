import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3DYSx8rjOE6q3k1NrW1MAq5HKN26ju6Q",
  authDomain: "linkedin-clone-543b5.firebaseapp.com",
  projectId: "linkedin-clone-543b5",
  storageBucket: "linkedin-clone-543b5.appspot.com",
  messagingSenderId: "200661798775",
  appId: "1:200661798775:web:5a5b28a54d2313049f9b72",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
