import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';


const App = () => {

  const [expenses, setExpenses] = useState(
  [
    { 
      id: '1', 
      title: 'Car Insurance', 
      amount: 294.76,
      date: new Date(2021, 2, 28),
      paid: false
    },
    { 
      id: '2', 
      title: 'Rent', 
      amount: 564.5, 
      date: new Date(2021, 3, 1),
      paid: false
    },
    { 
      id: '3', 
      title: 'Food', 
      amount: 54.35, 
      date: new Date(2021, 1, 20),
      paid: false
    },
    {
      id: '4',
      title: 'Toilet Paper', 
      amount: 6.99, 
      date: new Date(2021, 2, 25),
      paid: false
    }
  ]);

  const payHandler = (id) => {
    setExpenses(prevState => {
      const edited = [...prevState];
      const idx = edited.findIndex(e => e.id === id);
      edited[idx].paid = !edited[idx].paid;
      return edited;
    });
  };

  const addItemHandler = (newExpense) => {
    console.log("AddItem", newExpense);
    setExpenses(prevState => {
      const edited = [...prevState];
      const newId = Math.max.apply(Math, edited.map(function(o) { return o.id; })) + 1 ;
      const newItem = {...newExpense};
      newItem.id = newId;
      edited.push(newItem);
      return edited;
    });
  };

  const dropItemHandler = (id) => {
    setExpenses(prevState => {
      const edited = [...expenses.filter(e => e.id !== id)];
      return edited
    });    
  }


  return (
    <div>
      <NewExpense 
        onAddItem={addItemHandler}
        />
      <Expenses 
        items={expenses}
        onPayItem={payHandler}
        onDeleteItem={dropItemHandler}
        />
    </div>
  );
}

export default App;
