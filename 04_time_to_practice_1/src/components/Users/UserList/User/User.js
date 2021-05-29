import React from 'react';
import Button from '../../../UI/Button';
import classes from './User.module.css';

const User = (props) => {

  return (
    <li>
      {props.user.name} ({props.user.age})
      <Button className={classes.right} onClick={(id) => props.onDelete(props.user.id)}>X</Button>
    </li>
  );
};

export default User;