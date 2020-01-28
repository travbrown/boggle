import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import BoggleGrid from './boggle_grid';
//import BoggleSolver from './../../../boggle_solver';

function Boggle() {
    const [text, setText] = useState(/*initial state=*/"");

    
    return (
    <div>
        <hr></hr>
            <div>
                <BoggleGrid/>
            </div>
        <hr></hr>
        
        <TextField onChange={(event) => setText(event.target.value)} />
        
    </div>
    );
}
export default Boggle;