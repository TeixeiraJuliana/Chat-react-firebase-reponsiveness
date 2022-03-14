import React, {useState, useEffect, useRef} from "react"
import {db, auth} from '../services/firebase'
import SendMenssage from '../components/SendMenssage'
import SignOut from '../components/SignOut'

function chat(){
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createAt').limit(50).onSnapshot => {
            setMessages(snapshot.docs.map(doc => doc.data())
            )}
    },[])  
    return{
        <div>

            <SendMenssage/>
            <div className="msgs">
                {{messages.map({id, text, photoUrl, uid})}
            </div>

        </div>

    }     
}