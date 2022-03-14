import React from 'react';
import {auth} from '../firebase.js'
import {Button} from '@material-ui/core'

function SignOut(){
    return(
        <div className='siginOut'>
            <Button className='buttonSiginOut' onClick={()=> auth.signOut}>Sair</Button>
        </div>
    )
}
export default SignOut