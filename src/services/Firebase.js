import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const {REACT_APP_FB_KEY,REACT_APP_APP_ID,REACT_APP_SENDERID} = process.env;

const firebaseConfig = {
    apiKey: {REACT_APP_FB_KEY},
    authDomain: "e-commerce-coder-a17e2.firebaseapp.com",
    projectId: "e-commerce-coder-a17e2",
    storageBucket: "e-commerce-coder-a17e2.appspot.com",
    messagingSenderId: {REACT_APP_SENDERID},
    appId: {REACT_APP_APP_ID},
    measurementId: "G-N5W90988Z9"
};

export const fireBase = initializeApp(firebaseConfig);

export const db = getFirestore(fireBase);