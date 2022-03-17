import React, {useState, useEffect, useRef } from 'react';
import {db, auth} from '../firebase.js';
import SendMenssage from './SendMenssage';
import SignOut from './SignOut';


function Chat(){
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {

        db.collection('messages').orderBy('createAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
            })
    },[])  
    return(
        <div>
           <SignOut/>
            <div className="msgs">
            oiiiiiiiiiii
                {messages.map(({id, text, photoURL, uid}) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'send' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMenssage scroll={scroll} />
            <div ref={scroll}></div>
        </div> 

    )   
}

export default Chat