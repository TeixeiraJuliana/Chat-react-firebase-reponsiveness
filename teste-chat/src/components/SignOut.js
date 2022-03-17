import React from 'react';
import { auth } from '../firebase.js'
import goout from '../assets/img/goout.png'


function SignOut(){
    return (
        <div className='siginOut m-flexibilize'>
            <button className='buttonSiginOut' onClick={() => auth.signOut()}>
            <img  id='m-goOut' src={goout}/>
            </button>
        </div>
    )
}
export default SignOut;