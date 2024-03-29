import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    let input = props.input;

    return (
        <div className="UserInput">
            <input 
                type="textbox" 
                onChange={props.dataEntered}
                value={input} 
                />
        </div>
    )

};

export default userInput;