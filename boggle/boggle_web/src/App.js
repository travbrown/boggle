/*jshint esversion: 6 */
import React, { useState } from 'react';
import Boggle from './boggle';
import LoginButton from './LoginButton';
import Button from '@material-ui/core/Button';
import './App.css';



function App() {

  const [show, setShow] = useState(false);
  const [ buttonText, setButtonText ] = useState('Start');

  function Start(condition){
    if(condition){
      return <Boggle/> ;
    }
    return null;
  }

  function toggleVisibility(){
    
    if(show){
      setButtonText('Start');
    }else{
      setButtonText('Stop');
    }
    
    setShow(!show);
  }

  const [user, setUser] = useState(null);


  return (
    <div className="App">
      <header className="App-header">
        Boggle
        <LoginButton setUser={(user) => setUser(user)} />
        {user != null &&
              <p>Welcome, {user.displayName} would you like to </p> 
        } 
        <Button onClick ={() => toggleVisibility()}>
          {buttonText}
        </Button>
        
        <div>
          {Start(show)}
        </div>
      </header>
    </div>
  );
}

export default App;
