import { initializeApp } from 'firebase/app';
import "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCgT4DxlFwGMIEjCVe7Kh-XfNkyIjxLeHE",
    authDomain: "chatreact-f0568.firebaseapp.com",
    projectId: "chatreact-f0568",
    storageBucket: "chatreact-f0568.appspot.com",
    messagingSenderId: "1077860133064",
    appId: "1:1077860133064:web:ccf5ea3f677a08c390ddfd",
    measurementId: "G-ZSD82NHFGP"
}
export const auth = firebase;  


const app  = initializeApp(firebaseConfig);
export const db = getFirestore(app);



import { initializeApp } from 'firebase/app';
import "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';

firebase.initializeApp({
    apiKey: "AIzaSyCgT4DxlFwGMIEjCVe7Kh-XfNkyIjxLeHE",
    authDomain: "chatreact-f0568.firebaseapp.com",
    projectId: "chatreact-f0568",
    storageBucket: "chatreact-f0568.appspot.com",
    messagingSenderId: "1077860133064",
    appId: "1:1077860133064:web:ccf5ea3f677a08c390ddfd",
    measurementId: "G-ZSD82NHFGP"
})
export const auth = firebase;  



export const db = firebase.firestore()