import React from 'react';

const userInput = (props) => {
    let input = props.input;

    return (
        <div className="UserInput">
            <input 
                type="textbox" 
                onChange={props.dataEntered.bind(this)}
                value={input} 
                />
        </div>
    )

};

export default userInput;