import firebase from 'firebase';



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfB8ddOqBtKZwuSOSr2JSw5ROhiDnCZa4",
  authDomain: "teste-chat-react-hybri.firebaseapp.com",
  projectId: "teste-chat-react-hybri",
  storageBucket: "teste-chat-react-hybri.appspot.com",
  messagingSenderId: "149654688601",
  appId: "1:149654688601:web:d703c426885f29a5163248",
  measurementId: "G-NKHK2ZW4FW"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()
export{db, auth}


