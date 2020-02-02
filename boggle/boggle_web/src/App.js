import React, { useState } from 'react';
import Boggle from './boggle';
import Button from '@material-ui/core/Button';
import './App.css';



function App() {

  const [show, setShow] = useState(false);
  const [ buttonText, setButtonText ] = useState('Start');

  function Start(condition){
    if(condition){
      return <Boggle/>
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

  return (
    <div className="App">
      <header className="App-header">
        Boggle
        <Button onClick ={() => toggleVisibility()}>
          {buttonText}
        </Button>

        <div>
          {Start(show)}
        </div>
        Boggle mi Bomboclaat
      </header>
    </div>
  );
}

export default App;
