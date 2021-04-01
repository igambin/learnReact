import React from 'react';

const person = (props) =>  {
    let name = props.name;
    let age = props.age;
    return (
        <div>
            <p>{name} is {age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;