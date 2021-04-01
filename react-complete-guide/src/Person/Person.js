import React from 'react';

const person = (props) =>  {
    let name = props.name;
    let age = props.age;
    let clicked = props.clicked;
    return (
        <div>
            <p onClick={props.click.bind(this, name)}>{name} is {age} years old {clicked?"*":""}.</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;