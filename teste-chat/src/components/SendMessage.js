import React, { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from 'firebase';
import send from '../assets/img/send.png'


function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL, 
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='m-content-footer-chat m-flexibilize'>
            <form onSubmit={sendMessage}>
                <div className="sendMsg m-flexibilize">
                    <input className="inputSendMsg" placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)}></input>
                    <button className="buttonSendMsg" type="submit">
                      <img  id='m-goOut' src={send}/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage;