import React from 'react';
import classes from './Person.css';

const person = (props) => {
  let personId = props.personId;
  let name = props.name;
  let age = props.age;

  return (
    <div className={classes.Person}>
      <p>
        <input
          className={classes.PersonInput}
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