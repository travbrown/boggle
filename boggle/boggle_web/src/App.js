import React from 'react';
import Boggle from './components/boggle'
import './App.css';


function App() {
  return (
    <div className={App.General}>
      <header className="App-header">
        Boggle
        <div>
          <Boggle/>
        </div>
        Boggle mi Bomboclaat
      </header>
    </div>
  );
}

export default App;
