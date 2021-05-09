import React from 'react';
import CalendarDay from './CalenderDay/CalendarDay';
import Card from '../../UI/Card';
import classes from './ExpenseItem.css';

const ExpenseItem = (props) => {
    // prep output
    const priceClasses = [classes.expenseItem__price];
    if(props.item.paid) {
      priceClasses.push(classes.paid);
    };
    const amount = props.item.amount;
    const payLabel = props.item.paid === true ? "Unmark" : "Mark";

    return (
        <Card className={classes.expenseItem}>
            <CalendarDay date={props.item.date} />
            <div className={classes.expenseItem__description}>
                <h2>{props.item.title}</h2>
                <div className={priceClasses.join(' ')}>
                  {amount.toFixed(2)} €
                </div>
                <div>
                  <button className={classes.payLabel} onClick={() => props.click(props.item.id)}>{payLabel}</button><br/>
                  <button className={classes.payLabel} onClick={() => props.delete(props.item.id)}>Delete</button>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;