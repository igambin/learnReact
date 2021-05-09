import React from 'react';
import CalendarDay from './CalenderDay/CalendarDay';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
   
    return (
        <div className="expenseItem">
            <CalendarDay date={props.date} />
            <div className="expenseItem__description">
                <h2>{props.title}</h2>
                <div className="expenseItem__price">{props.amount.toFixed(2)} €</div>
              </div>
        </div>
        
    );

}

export default ExpenseItem;