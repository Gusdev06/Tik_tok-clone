// CONFIGURAÇÕES FIRE BASE


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyANm63oxvWj01DL_c3iKPtnip0lecNZin0",
  authDomain: "tiktok---clone-7abea.firebaseapp.com",
  projectId: "tiktok---clone-7abea",
  storageBucket: "tiktok---clone-7abea.appspot.com",
  messagingSenderId: "743509009267",
  appId: "1:743509009267:web:c8c23a31f1ca3f19881b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;