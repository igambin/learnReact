import React, {useState} from 'react';
import classes from './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [formIsVisible, setFormIsVisible] = useState(false);


  const onChangedHandler = (e, setter) => {
    setter((prevState => e.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      id: null,
      title: title,
      amount: +amount,
      date: new Date(date),
      paid: false
    };
    props.onAddItem(newExpense);
    resetFormHandler(event);
  };

  const resetFormHandler = (event) => {
    setTitle('');
    setAmount(0);
    setDate('');
    setFormIsVisible(false);
  }

  const expandExpenseForm = (event) => {
    setFormIsVisible(true);
  }

  let newExpenseForm = formIsVisible === true 
  &&  <form onSubmit={submitHandler}>
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
          <button type="button" onClick={resetFormHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
  ||
    <div>
      <button type="button" onClick={expandExpenseForm}>Add new Expense</button>
    </div>
  ;

  return (
    <div>
      {newExpenseForm}
    </div>
    );
    

};

export default ExpenseForm;