import React from "react";
import ExpenseItem from './ExpenseItem/ExpenseItem';
import classes from "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className={classes.Expenses}>
    {props.items.map(ex => (
      <ExpenseItem 
        key={ex.id}
        date={ex.date}
        title={ex.title}
        amount={ex.amount} />
    ))}
    </div>
  );
};

export default Expenses;
