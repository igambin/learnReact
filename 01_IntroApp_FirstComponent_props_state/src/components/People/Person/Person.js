import React from 'react';
import classes from './Person.css';

const Person = (props) => (
  <div className={classes.Person}>
    <p>
      <input
        className={classes.Input}
        type="text"
        name={props.personId}
        value={props.name}
        onChange={props.updatePerson} 
      /> is {props.age} years old
      </p>
    <button onClick={props.deletePerson}>Delete</button>
  </div>
);

export default Person;