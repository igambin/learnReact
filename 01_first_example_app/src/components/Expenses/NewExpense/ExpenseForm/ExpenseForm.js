import React, {useState} from 'react';
import classes from './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');

  const onChangedHandler = (e, setter) => {
    console.log(e);
    console.log(e.target.value);
    const value = e.target.value;
    setter(e.target.value);
  };

  const onAddItemHandler = () => {

    const newExpense = {
      id: null,
      title: title,
      amount: parseInt(amount),
      date: new Date(date),
      paid: false
    };
    props.onAddItem(newExpense);
  };

  return (
    <form>
      <div className={classes.NewExpense__controls}>
        <div className={classes.NewExpense__control}>
          <label>Title</label>
          <input type="text" 
            value={title} 
            onChange={(e) => onChangedHandler(e, (x) => setTitle(x))} 
            />
        </div>
        <div className={classes.NewExpense__control}>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" 
            value={amount} 
            onChange={(e) => onChangedHandler(e, (x) => setAmount(x))} 
            />
        </div>
        <div className={classes.NewExpense__control}>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" 
            value={date} 
            onChange={(e) => onChangedHandler(e, (x) => setDate(x))} 
            />
        </div>
      </div>
      <div className={classes.NewExpense__actions}>
        <button type="button" onClick={onAddItemHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;