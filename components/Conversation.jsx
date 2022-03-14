
import React, { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore'
import { db } from "../firebase/index";

export default function Conversation(){
   const [messages, setMessages] = useState([])
    
    useEffect(() => {
      getMessages
    
    }, [])
    
    

    function getMessages(){
        const messageCollectionRef = collection(db, 'messages')
        getDocs(messageCollectionRef).then(Response => {
            console.log(Response)

        }).catch(error => console.log(error.message))
    }
  return (
    <div>
        ola mundo 
    </div>
  );
}