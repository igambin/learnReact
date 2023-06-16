import React from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import classes from './ExpensesList.css';

const ExpensesList = (props) => {
  
  let expenseContent = props.items.length === 0 
  && <p className={classes.Fallback}>No Expenses found</p>
  || props.items.map(ex => (
        <ExpenseItem  
          key={ex.id} 
          item={ex}
          click={props.onPayItem}
          delete={props.onDeleteItem}
          />
      ));

  return (
    <ul className={classes.ExpensesList}>
      {expenseContent}
    </ul>
  );
};

export default ExpensesList;