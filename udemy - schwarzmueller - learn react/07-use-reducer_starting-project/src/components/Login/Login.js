import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from './Input';

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
  
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Validate');
      setFormIsValid(emailState.isValid && pwState.isValid);
    }, 500);

    return () => {
      console.log('cleanup Validate')
      clearTimeout(identifier);
    };
  }, [emailState.isValid, pwState.isValid]);


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

  const emailInputRef = useRef();
  const pwInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      ctx.onLogin(emailState.value, pwState.value);
    } else if(!emailState.isValid) {
      emailInputRef.current.focus();
    } else {
      pwInputRef.current.focus();
    }
  };


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          type="email"
          label="E-Mail"
          data={emailState.value}
          isValid={emailState.isValid}
          onInputChanged={emailChangeHandler}
          onInputBlurred={validateEmailHandler}
          />
        <Input
          ref={pwInputRef}
          id="password"
          type="password"
          label="Password"
          data={pwState.value}
          isValid={pwState.isValid}
          onInputChanged={passwordChangeHandler}
          onInputBlurred={validatePasswordHandler}
          />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
