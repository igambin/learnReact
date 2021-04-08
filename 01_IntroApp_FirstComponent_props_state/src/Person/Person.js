import React from 'react';
import './Person.css'

const person = (props) =>  {
    let personId = props.personId;
    let name = props.name;
    let age = props.age;
    let clicked = props.clicked;

    return (
        <div className="Person">
            <p>
                <input 
                    type="text" 
                    name={personId} 
                    onChange={props.changed.bind(this)} value={name} 
                    /> is {age} years old
            </p>
            <button onClick={props.click}>Delete</button>
        </div>
    )
};

export default person;