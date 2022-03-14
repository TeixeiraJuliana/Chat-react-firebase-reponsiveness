import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD8eC0J5U_sx_tWDfDYeogvwhn4bRoFefA",
    authDomain: "react-test-chat-ce331.firebaseapp.com",
    projectId: "react-test-chat-ce331",
    storageBucket: "react-test-chat-ce331.appspot.com",
    messagingSenderId: "997144071723",
    appId: "1:997144071723:web:c1aa0abc397f692c9fe46e",
    measurementId: "G-GV3CMHQ8EQ"
}); 

const db = firebaseApp.firestore()

const auth = firebase.auth()
console.log(db)
export{db, auth}