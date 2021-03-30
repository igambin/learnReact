import React from 'react';

const person = (props) =>  {
    let name = props.name;
    let age = props.age;
    return (
        <p>The Person {name} and is {age} years old.</p>
    );
}

export default person;