import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const stringValueReducer = (state, action, validationFn) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.value, isValid: validationFn(action.value)};
  }
  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: validationFn(state.value)}
  }
  return { value: '', isValid: false};
}

const emailReducer = (state, action) =>  stringValueReducer(state, action, (input) => input.includes('@'));
const passwordReducer = (state, action) => stringValueReducer(state, action, (input) => input.trim().length > 6);

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer, 
    { value: '', isValid: false},
    );

  const [pwState, dispatchPW] = useReducer(
    passwordReducer, 
    { value: '', isValid: false},
    );
  
  const {isValid: emailIsValid} = emailState;
  const {isValid: pwIsValid} = pwState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Validate');
      setFormIsValid(emailState.isValid && pwState.isValid);
    }, 500);

    return () => {
      console.log('cleanup Validate')
      clearTimeout(identifier);
    };
  }, [emailIsValid, pwIsValid]);


  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPW({type: 'USER_INPUT', value: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPW({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, pwState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            pwState.isValid ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
