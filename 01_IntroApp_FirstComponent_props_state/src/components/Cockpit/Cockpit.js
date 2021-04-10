import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

  let btnClass = [classes.Button];
  if(props.showPeople)
  {
    btnClass.push(classes.Red);
  }

  return (
    <div>
      <h1>
        {props.appTitle}
      </h1>
      <button
        className={btnClass.join(' ')}
        onClick={() => props.togglePeopleView()}>
        Toggle 'ShowPeople'
    </button>
    </div>
  )
};

export default Cockpit;