import firebase from 'firebase';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgT4DxlFwGMIEjCVe7Kh-XfNkyIjxLeHE",
    authDomain: "chatreact-f0568.firebaseapp.com",
    databaseURL: "https://chatreact-f0568-default-rtdb.firebaseio.com",
    projectId: "chatreact-f0568",
    storageBucket: "chatreact-f0568.appspot.com",
    messagingSenderId: "1077860133064",
    appId: "1:1077860133064:web:ccf5ea3f677a08c390ddfd",
    measurementId: "G-ZSD82NHFGP"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()
export{db, auth}

console.log(db)