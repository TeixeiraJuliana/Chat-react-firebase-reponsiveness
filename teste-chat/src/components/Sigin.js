import React from 'react';
import firebase from 'firebase';
import {auth} from '../firebase.js';
import {Button} from '@material-ui/core';


function SignIn(){
    function signImwithGoogle(){
        const provider = new firebase.auth.GithubAuthProvider()
        auth.signInWithPopup(provider)
    }
    return(
        <div className='m-signIn'>
            <Button className='buttonSignIn' onClick={signImwithGoogle}>Login com Google</Button>
        </div>
    )
}

export default SignIn;