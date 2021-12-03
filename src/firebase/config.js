import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAbNHjg2-_gk3PAKhzVVjC_8Br7yzpEH5s",
  authDomain: "coderhouse-testreact.firebaseapp.com",
  projectId: "coderhouse-testreact",
  storageBucket: "coderhouse-testreact.appspot.com",
  messagingSenderId: "988527421233",
  appId: "1:988527421233:web:a9c14ba3cb82a75a5c3210"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);