/*jshint esversion: 8 */
import React, { useState, useEffect } from 'react';
import Boggle from './boggle';
import LoginButton from './LoginButton';
import Button from '@material-ui/core/Button';
import './App.css';
import db from './firebase';



function App() {

  const [user, setUser] = useState(null);
  const [showChallenges, setShowChallenges] = useState(false);
  const [ loadedOrRandom, setLoadedOrRandom] = useState('Random');
  const [ loadedBoards, setLoadedBoards] = useState(null);
  const [ selectedChallenge, setSelectedChallenge] = useState(null);
  const [ highScores, setHighScores] = useState(null);

  useEffect(()=>{
    async function loadUp(boards, highscores) {
      let challengeRef = db.collection('challenges');
      challengeRef.get().then( (snapshot) => {
        snapshot.forEach((doc)=>{
          boards.push(doc.data().board);
          highscores.push(doc.data().highscore);
        });
      }); 
    }

    let boards = [];
    let highscores = [];
    loadUp(boards, highscores);
    setLoadedBoards(boards);
    setHighScores(highscores);

  },[]);

  return (
    <div className="App">
      <header className="App-header">
        Boggle

        <LoginButton setUser={(user) => setUser(user)} />
        {user != null &&
          <div>

          
              <p>Welcome, {user.displayName} would you like to </p>       

              <Button onClick={()=>{
                setShowChallenges(!showChallenges)
                }}>
                  Load Challenge
              </Button>

              { showChallenges === true &&
                <div>
                  <Button onClick={()=>{
                      setLoadedOrRandom('Loaded')
                      setSelectedChallenge(1)
                      }}>
                    Challenge 1 | High Score: {highScores[0]} 
                  </Button>
                  <br></br>
                  <Button onClick={()=>{
                      setLoadedOrRandom('Loaded')
                      setSelectedChallenge(2)
                      }}>
                  Challenge 2 | High Score: {highScores[1]}
                  </Button>
                </div>
              }
              
              <Boggle 
                  loadedOrRandom={loadedOrRandom}
                  setLoadedOrRandom={setLoadedOrRandom}
                  highScores={highScores} 
                  loadedBoards={loadedBoards} 
                  selectedChallenge={selectedChallenge}/>
            </div>
        }
      </header>
    </div>
  );
}

export default App;
