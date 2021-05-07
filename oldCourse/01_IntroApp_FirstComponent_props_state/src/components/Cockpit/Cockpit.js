import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);  

  useEffect( () => {
    // is basically a combined componentDidMount/~DidUpdate-hook
    console.log('[ Cockpt.js | useEffect ]');
    // this would be an opportunity to maybe call HTTP-services

    // const timer = setTimeout(() => {
    //   alert('Welcome to the Learning-App!');
    // }, 1000);

    //toggleBtnRef.current.click();

    return () => {
      console.log('useEffect for cleanup after \'unmount\'');
      // clearTimeout(timer);
    }
  }, []); // [] basically simulates componentDidMount (runs just once)

  // useEffect can be used multiple times
  useEffect( () => {
    // is basically a combined componentDidMount/~DidUpdate-hook
    console.log('[ Cockpt.js | 2nd useEffect ]');
    return () => {
      console.log('2nd useEffect for cleanup after \'unmount\'');
    }
  });

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
        ref={toggleBtnRef}
        className={btnClass.join(' ')}
        onClick={() => props.togglePeopleView()}>
        Toggle 'ShowPeople'
    </button>
      { authContext.authenticated ? 
        <button
          className={[classes.Button, classes.Red].join(' ')}
          onClick={authContext.logout}
          >Log Out</button>
      : <button
          className={classes.Button}
          onClick={authContext.login}
          >Log In</button>
      }
    </div>
  )
};

export default React.memo(Cockpit);