import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import BoggleGrid from './boggle_grid';

function Boggle() {
    const [text, setText] = useState(/*initial state=*/"");
    
    return (
    <div>
        <BoggleGrid/>
        <TextField onChange={(event) => setText(event.target.value)} />
    </div>
    );
}
export default Boggle;