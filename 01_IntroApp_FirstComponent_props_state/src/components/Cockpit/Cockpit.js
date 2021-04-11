import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

  useEffect( () => {
    // is basically a combined componentDidMount/~DidUpdate-hook
    console.log('[ Cockpt.js | useEffect ]');
    // this would be an opportunity to maybe call HTTP-services

    setTimeout(() => {
      alert('Welcome to the Learning-App!');
    }, 1000);
  }, []); // [] basically simulates componentDidMount (runs just once)

  // useEffect can be used multiple times
  // useEffect(() => { ... });


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