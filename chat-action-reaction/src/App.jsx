import { useState } from 'react';
import './App.css';
import authenticationService from './services/authentication';
import MessaginService from './services/messaging';

function App() {
  async function handleGoogleLogin (){
    await authenticationService.loginWithGoogle()
}
const [logged, setLogged] = useState(authenticationService)
authenticationService.observeStatus(user =>{
  setLogged(!!user)
})
  return (
    <div className="App">
      <h1>Ola mundo</h1>
      logged && <button onClick={handleGoogleLogin} >
        Login com google
      </button>
    </div>
  );
}

export default App;
