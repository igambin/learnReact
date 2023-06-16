import React from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import classes from './NewExpense.css';

const NewExpense = (props) => {

  return (
    <div className={classes.NewExpense}>
      <ExpenseForm 
        onAddItem={props.onAddItem} 
        />
    </div>
  );
};

export default NewExpense;