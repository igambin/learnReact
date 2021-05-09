import React from 'react';
import CalendarDay from './CalenderDay/CalendarDay';
import classes from './ExpenseItem.css';

const ExpenseItem = (props) => {
   
    return (
        <div className={classes.expenseItem}>
            <CalendarDay date={props.date} />
            <div className={classes.expenseItem__description}>
                <h2>{props.title}</h2>
                <div className={classes.expenseItem__price}>{props.amount.toFixed(2)} €</div>
              </div>
        </div>
        
    );

}

export default ExpenseItem;