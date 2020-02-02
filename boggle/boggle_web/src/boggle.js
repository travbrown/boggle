import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import BoggleGrid from './boggle_grid';
import axios from 'axios';
import { Button } from '@material-ui/core';
import BoggleSolver from './boggle_solver';

export const Boggle = () => {
    const RandomizeBoard = () => {
        var grid = RandomGrid()
        randomizeGrid(grid);      
    }
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
    }

    useEffect(() =>{
        axios.get(
            'https://www.wordgamedictionary.com/enable/download/enable.txt'
            ).then(({dictionary}) => {
                console.log(dictionary)
                setDictionary(dictionary);
            }).catch((err) =>{
                console.log(err)
            })

    },[]);

    const [text, setText] = useState(/*initial state=*/"");
    const [grid, randomizeGrid] = useState(RandomGrid());
    const [dictionary, setDictionary] = useState('useEffect() in Hooks');

    
    return (
        <div>
            <Button onClick={()=> RandomizeBoard()}>
                Randomize
            </Button>
            <div >
                <BoggleGrid grid={grid}/>
            </div>

            <TextField onChange={(event) => setText(event.target.value)} />
        </div>
    );
}
export default Boggle;