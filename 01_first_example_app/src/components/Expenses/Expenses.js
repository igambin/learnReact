import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import classes from "./Expenses.css";

const Expenses = (props) => {
  
  return (
    <Card className={classes.Expenses}>
      {props.items.map(ex => (
        <ExpenseItem  
          key={ex.id} 
          item={ex}
          click={props.onPayItem}
          />
      ))}
    </Card>
  );
};

export default Expenses;
