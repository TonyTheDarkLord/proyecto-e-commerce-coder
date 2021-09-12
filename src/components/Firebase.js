import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZbf8NTiJSSNRUWmLX7Bc7cCVm-q5x_IU",
    authDomain: "e-commerce-coder-a17e2.firebaseapp.com",
    projectId: "e-commerce-coder-a17e2",
    storageBucket: "e-commerce-coder-a17e2.appspot.com",
    messagingSenderId: "749338640554",
    appId: "1:749338640554:web:d054049b2bd3b655a110d3",
    measurementId: "G-N5W90988Z9"
};

export const fireBase = initializeApp(firebaseConfig);

export const db = getFirestore(fireBase);