import React from 'react';

const person = (props) =>  {
    let personId = props.personId;
    let name = props.name;
    let age = props.age;

    return (
        <div>
            <p>
                <input 
                    type="text" 
                    name={personId} 
                    onChange={props.changed} value={name} 
                    /> is {age} years old
            </p>
            <button onClick={props.click}>Delete</button>
        </div>
    )
};

export default person;