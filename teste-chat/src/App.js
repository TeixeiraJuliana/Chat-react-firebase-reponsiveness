import '../src/assets/styles/reset.css';
import '../src/assets/styles/module/general-module.css';
import '../src/assets/styles/theme/general-theme.css';
import '../src/assets/styles/responsiveness/general-responsiveness.css'; 
import '../src/assets/styles/state/general-state.css'; 
import Chat from './components/Chat';
import SignIn from './components/Sigin';
import {auth} from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className='m-container-chat'>
      {user ? <Chat/> : <SignIn/>}
    </div >
  
  );
}
export default App;
