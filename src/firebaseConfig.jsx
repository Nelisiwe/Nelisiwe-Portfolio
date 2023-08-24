import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAqJjLCQ7YBJsxRWsened_QPLbmSEmX65U",
  authDomain: "contact-84271.firebaseapp.com",
  projectId: "contact-84271",
  storageBucket: "contact-84271.appspot.com",
  messagingSenderId: "821613987948",
  appId: "1:821613987948:web:e1973696f0945c80b63049",
  measurementId: "G-JSG0R6XHQ1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
