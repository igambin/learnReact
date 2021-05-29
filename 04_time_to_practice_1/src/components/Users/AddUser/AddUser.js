import React, { useState } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import Modal from '../../UI/Modal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  let [userName, setUserName] = useState('');
  let [age, setAge] = useState('');
  let [error, setError] = useState();

  const onAddUserHandler = (event) => {
    event.preventDefault();
    if(userName.trim().length === 0) {
      setError({ title: 'Username is invalid', message: 'Username may not be empty!' });
      return;
    }
    if(isNaN(age)) {
      setError({ title: 'Age is invalid', message: 'Age may not be empty!'});
      return;
    }
    if(age<0) {
      setError({ title: 'Age is invalid', message: 'Age may not be lower than 0!'});
      return;
    }
    const user = {name: userName, age: +age};
    props.onAddUser(user);
    resetForm();
  }

  const resetError = () => {
    setError();
  }

  const onChangedHandler = (e, setter) => {
    setter((prevState => e.target.value));
  };

  const resetForm = () => {
    setUserName('');
    setAge('');
  }

  return (
    <div>
      { error && 
      <Modal 
        title={error.title} 
        message={error.message} 
        onOk={resetError}
        /> 
      }
      <Card className={classes.input}>
        <form onSubmit={onAddUserHandler}>
            <label htmlFor="username">Username</label>
            <input 
              type="text"
              id="username"
              onChange={(e) => onChangedHandler(e, (x) => setUserName(x))}
              value={userName} 
              />
            <label htmlFor="age">Age</label>
            <input 
              type="number" 
              id="age"
              onChange={(e) => onChangedHandler(e, (x) => setAge(x))} 
              value={parseInt(age)}
              />
            <Button type='button' onClick={resetForm}>Cancel</Button>
            <Button type='submit' className={classes.right}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;