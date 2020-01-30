import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import BoggleGrid from './boggle_grid';
import { Button } from '@material-ui/core';
import BoggleSolver from './../boggle_solver/boggle_solver';

const Boggle = () => {
    
    const [text, setText] = useState(/*initial state=*/"");
    const [grid, randomizeGrid] = useState(initializeBoard());
    
    function generateRandomString(length) {
        // No cap, I got this from the internet
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         
        for (var i = 0; i < length; i++){
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    function makeGrid(){
        var grid = new Array(3);
        for( let i = 0; i < 3; i++ ){
            grid[i] = new Array(3);
        }
        return grid;
    }

    function initializeBoard(){
        var grid = makeGrid();
    
        for( let i = 0; i < 3; i++){
            let lettersForGridRow = generateRandomString(3);
            for(let a = 0; a < 3; a++){
                grid[i][a] = lettersForGridRow[a];
            }
        }
        return grid;
    }

    function RandomizeBoard(){
        var grid = initializeBoard()
        randomizeGrid(grid);      
    }
    
    return (
        <div>
            <Button onClick={()=> RandomizeBoard()}>
                Randomize
            </Button>
            <hr></hr>
                <div>
                    <BoggleGrid grid={grid}/>
                </div>
            <hr></hr>
            
            <TextField onChange={(event) => setText(event.target.value)} />
            {text}
        </div>
    );
}
export default Boggle;