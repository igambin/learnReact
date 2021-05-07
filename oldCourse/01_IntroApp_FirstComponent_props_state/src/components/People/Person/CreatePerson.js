import React, { useState } from 'react';
import classes from './Person.css';

const CreatePerson = (props) => {
  const [createPersonState, setPerson] = useState( 
    {
      name: '',
      age: ''
    });
  
  const savePersonHandler = props.savePersonHandler;

  const lblClass = [classes.Label, classes.Left];
  const inputClass = [classes.Input, classes.Left];

  return (
    <div className={classes.Person}>
      <div>
        <div className={lblClass.join(' ')}>Name</div>
        <input 
          className={inputClass.join(' ')} 
          type='text' 
          value={createPersonState.name} 
          onChange={() => setPerson()}
          />
      </div>
      <div>
        <div className={lblClass.join(' ')}>Age</div>
        <input 
          className={inputClass.join(' ')} 
          type='text' 
          value={createPersonState.age} 
          onChange={() => setPerson()}
          />
      </div>
      <button className={classes.Button} onClick={savePersonHandler(createPersonState.name, createPersonState.age)}>Add</button>
    </div>
  )
};

export default CreatePerson;
