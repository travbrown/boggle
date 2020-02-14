/*jshint esversion: 6 */

import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import BoggleGrid from './boggle_grid';
import Button from '@material-ui/core/Button';
import BoggleSolver from './boggle_solver';
var dict = require('./full-wordlist.json');

export const Boggle = (props) => {
    
    const setBoard = () => {
        let grid;
        if(props.loadedOrRandom === 'Loaded'){
            grid = loadGrid();
        }else{
            grid = RandomGrid();
        }

        setUserFoundWords([]);
        setCurrentScore(0);
        setGrid(grid);      
    };    
    
    // Returns a random 5x5 board, using the official letter distribution.
    const RandomGrid = () => {
        let grid = [];
        if(props.loadedOrRandom === 'Loaded'){
            grid = loadGrid();
            
            return grid;
        }
        // prettier-ignore
        const dice = ["AAAFRS", "AAEEEE", "AAFIRS", "ADENNN", "AEEEEM",
                    "AEEGMU", "AEGMNN", "AFIRSY", "BJKQXZ", "CCNSTW",
                    "CEIILT", "CEILPT", "CEIPST", "DHHNOT", "DHHLOR",
                    "DHLNOR", "DDLNOR", "EIIITT", "EMOTTT", "ENSSSU",
                    "FIPRSY", "GORRVW", "HIPRRY", "NOOTUW", "OOOTTU"];
        let chars = dice.map(cube => cube[Math.floor(Math.random() * cube.length)]);
        chars.sort(() => Math.random() - 0.5); // Shuffle the letters.
    
        const SIZE = 5;
        
        for (let row = 0; row < SIZE; row++) {
            grid[row] = [];
            for (let col = 0; col < SIZE; ++col) {
                grid[row][col] = chars[SIZE * row + col];
                if (grid[row][col] === "Q") grid[row][col] = "Qu";
            }
        }   
        return grid;
    };
    const [showBoggle, setShowBoggle] = useState(false);

    const loadGrid = () =>{
        if(props.loadedOrRandom === 'Loaded'){
            let chars = props.loadedBoards[props.selectedChallenge-1].split('');
            const SIZE = 5;
            let gameBoard = [];
            for (let row = 0; row < SIZE; row++) {
                gameBoard[row] = [];
                for (let col = 0; col < SIZE; ++col) {
                    gameBoard[row][col] = chars[SIZE * row + col];
                    if (gameBoard[row][col] === "Q") gameBoard[row][col] = "Qu";
                }
            }
            return gameBoard;
        }
    };

    /**
     * Uppercases all letters except the any 'u' that appears to be paired with a Q.
     * 
     * @param {*} text 
     */
    const matchUserInputLetterCaseToGrid = (text) =>{
        
        let previousLetter = '', upperCasedText = [];
        text = text.toUpperCase();
    
        if(text.indexOf('Q') !== -1){
            let listOfTextLetters = text.split("");
            for( let i = 0 ; i < text.length; i++){
                if(previousLetter === 'Q'){
                    listOfTextLetters[i] = text[i].toLowerCase();
                }
                previousLetter = text[i];
            }
            text = listOfTextLetters.join('');
        }
        upperCasedText.push(text);
        return upperCasedText;
    };

    const validateUserAnswer = (event) => {
        if(event.key === 'Enter'){
            let givenDict = dict.words;
            let letterCaseMatchedText = matchUserInputLetterCaseToGrid(text);
            let potentialUserFoundWord = BoggleSolver.findAllSolutions(grid,letterCaseMatchedText);
            //debugger;
            if(potentialUserFoundWord === []){
                alert('This word is not in the grid');
            }else{                 
                if(givenDict.includes(text.toLowerCase())){
                    if(userFoundWords.includes(potentialUserFoundWord[0])){
                        alert('You already found this word');
                    }else{
                        setUserFoundWords([...userFoundWords, potentialUserFoundWord[0]]);
                        let updatedScore = currentScore + 1;
                        setCurrentScore(updatedScore);
                    }          
                }else{
                    alert('We do not recognize this word.');
                }
            }
        }
    };

    const toggleVisibility = () => {
    
        if(props.loadedOrRandom === 'Random'){
            if(showBoggle){
                setRandomPlayButtonText('Start New Game');
            }else{
                setRandomPlayButtonText('Stop');
            }
            setShowBoggle(!showBoggle);
        }else{
            if(challengeButtonText === 'Stop'){
                setChallengeButtonText('Start');
                props.setLoadedOrRandom('Random');
            }else{
                setChallengeButtonText('Stop');
                props.setLoadedOrRandom('Loaded');
                
            }
        }

    };

   
    

    const [text, setText] = useState("");
    const [grid, setGrid] = useState(props.loadedOrRandom === 'Random'? RandomGrid(): loadGrid());
    const [randomPlayButtonText, setRandomPlayButtonText] = useState('Start New Game');
    const [challengeButtonText, setChallengeButtonText] = useState('Stop');
    const [userFoundWords, setUserFoundWords] = useState([]);
    const [currentScore,setCurrentScore] = useState(0);
    
    return (
        <div>
            { props.loadedOrRandom === 'Random' &&
                <Button onClick ={ () => toggleVisibility()}>
                    {randomPlayButtonText}
                </Button>
            }

            { (showBoggle === true || props.loadedOrRandom === 'Loaded') &&
                <div>
                    { (props.loadedOrRandom === 'Loaded' && challengeButtonText === 'Stop') &&
                        <Button onClick ={ () => toggleVisibility()}>
                            {challengeButtonText}
                        </Button>
                    }

                    { props.loadedOrRandom === 'Random' && 
                        <Button onClick={()=> setBoard()}>
                            Randomize
                        </Button>
                    }

                    <BoggleGrid grid={grid}></BoggleGrid>
                    
                    
                    {currentScore}
                    <TextField onKeyPress={(event) => validateUserAnswer(event)} onChange={(event) => setText(event.target.value)} />
                    {userFoundWords}  
                </div>
            }
        </div>    
    );
}
export default Boggle;