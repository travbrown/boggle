import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          XPRSV
        </p>
        <p>Pronounciation: Expressive</p>
        <TextInput promptText="Name?"/>
        <TextInput promptText="Hometown?"/>
      </header>
    </div>
  );
}

export default App;
