import React, { useState } from 'react';


function TextInput({promptText}){

    const [text, setText] = useState(/*initial state=*/ "no text set");

    function getUserInput(){
        const promptResponse = prompt(promptText);
        console.log(promptResponse)
        setText(promptResponse)
    }

    return(
        <p>
            <button onClick={() => getUserInput()}>
                {promptText}
            </button>
            {text}
        </p>
        
    )
}

export default TextInput;