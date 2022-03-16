import '../src/styles/reset.css';
import '../src/styles/module/general-module.css';
import Chat from './components/Chat';
import SignIn from './components/Sigin';
import {auth} from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat/> : <SignIn/>}
    </>
  
  );
}
export default App;
