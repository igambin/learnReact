import React from 'react';
import './Person.css'
const person = (props) =>  {
    let name = props.name;
    let age = props.age;
    let clicked = props.clicked;
    return (
        <div className="Person">
            <p><input type="text" name={name} onChange={props.changed.bind(this)} value={name} /><span onClick={props.click.bind(this, name)}> is {age} years old {clicked?"*":""}</span></p>
        </div>
    )
};

export default person;