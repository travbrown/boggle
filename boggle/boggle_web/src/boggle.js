/*jshint esversion: 6 */

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import BoggleGrid from './boggle_grid';
import { Button } from '@material-ui/core';
import BoggleSolver from './boggle_solver';
var dict = require('./full-wordlist.json');

export const Boggle = () => {
    
    const RandomizeBoard = () => {
        var grid = RandomGrid();
        randomizeGrid(grid);      
    };
    
    // Returns a random 5x5 board, using the official letter distribution.
    const RandomGrid = () => {
        // prettier-ignore
        const dice = ["AAAFRS", "AAEEEE", "AAFIRS", "ADENNN", "AEEEEM",
                    "AEEGMU", "AEGMNN", "AFIRSY", "BJKQXZ", "CCNSTW",
                    "CEIILT", "CEILPT", "CEIPST", "DHHNOT", "DHHLOR",
                    "DHLNOR", "DDLNOR", "EIIITT", "EMOTTT", "ENSSSU",
                    "FIPRSY", "GORRVW", "HIPRRY", "NOOTUW", "OOOTTU"];
        let chars = dice.map(cube => cube[Math.floor(Math.random() * cube.length)]);
        chars.sort(() => Math.random() - 0.5); // Shuffle the letters.
    
        const SIZE = 5;
        let grid = [];
        for (let row = 0; row < SIZE; row++) {
            grid[row] = [];
            for (let col = 0; col < SIZE; ++col) {
                grid[row][col] = chars[SIZE * row + col];
                if (grid[row][col] === "Q") grid[row][col] = "Qu";
            }
        }   
        return grid;
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
            let listOfText = text.split("");
            for( let i = 0 ; i < text.length; i++){
                if(previousLetter === 'Q'){
                    listOfText[i] = text[i].toLowerCase();
                }
                previousLetter = text[i];
            }
            text = listOfText.join('');
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
                console.log('This word is not in the grid');
            }else{                 
                if(givenDict.includes(text.toLowerCase())){
                    console.log('USER ANSWER VALIDATED');
                    if(userFoundWords.includes(potentialUserFoundWord[0])){
                        console.log('You already found this word (print this to the webpage)');
                    }else{
                        console.log('Yay new word');
                        setUserFoundWords([...userFoundWords, potentialUserFoundWord[0]]);
                    }          
                }else{
                    console.log('Badman a weh yah do, dis look like one word to yuh');
                }
            }
        }
    };


//    const displayValidWordsToUser = (arrOfText) => {   };

    const [text, setText] = useState(/*initial state=*/"");
    const [grid, randomizeGrid] = useState(RandomGrid());
    const [userFoundWords, setUserFoundWords] = useState([]);
    
    return (
        <div>
            <Button onClick={()=> RandomizeBoard()}>
                Randomize
            </Button>
            <div >
                <BoggleGrid grid={grid}/>
            </div>

            <TextField onKeyPress={(event) => validateUserAnswer(event)} onChange={(event) => setText(event.target.value)} />
            {userFoundWords}
            {/* <ul>
                {validWords.map((word) =>{
                    <li>{word}</li>
                })}
            </ul> */}
            
        </div>
    );
}
export default Boggle;