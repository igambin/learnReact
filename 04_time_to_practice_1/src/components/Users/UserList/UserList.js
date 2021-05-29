import React from 'react';
import Card from '../../UI/Card';
import User from './User/User';
import classes from './UserList.module.css';

const UserList = (props) => {

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map( user => (
          <User 
            key={user.id}
            onDelete={props.onDelete}
            user={user} 
            />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;