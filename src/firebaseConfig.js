import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdIzDLy1-SEr9Sse_Sw_PmCa3F5XLGlUE",
  authDomain: "contact-page-e4874.firebaseapp.com",
  projectId: "contact-page-e4874",
  storageBucket: "contact-page-e4874.appspot.com",
  messagingSenderId: "1046057760690",
  appId: "1:1046057760690:web:24a1140dbe43ee2445d6ab",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);