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
    const edited = [...expenses];
    const idx = edited.findIndex(e => e.id === id);
    edited[idx].paid = !edited[idx].paid;
    setExpenses(edited);
  };

  const addItemHandler = (newExpense) => {
    console.log("AddItem", newExpense);
    const edited = [...expenses];
    const newId = Math.max.apply(Math, edited.map(function(o) { return o.id; })) + 1 ;
    const newItem = {...newExpense};
    newItem.id = newId;
    edited.push(newItem);
    setExpenses(edited);
  };


  return (
    <div>
      <NewExpense 
        onAddItem={addItemHandler}
        />
      <Expenses 
        items={expenses}
        onPayItem={payHandler}
        />
    </div>
  );
}

export default App;
