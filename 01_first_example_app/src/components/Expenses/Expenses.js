import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import classes from "./Expenses.css";

const Expenses = (props) => {
  
  const [yearFilter, setYearFilter] = 
    useState(new Date().getFullYear());

  const selectYearHandler = (year) => {
    setYearFilter(year);
  };

  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }
  
  let sorted = props.items
    .filter(ex => ex.date.getFullYear()+"" === yearFilter)
    .sort((a,b) => {
      let keya =  a.date.getFullYear()
                + (a.date.getMonth()+1).pad(2)
                + a.date.getDate().pad(2);
      let keyb =  b.date.getFullYear()
                + (b.date.getMonth()+1).pad(2)
                + b.date.getDate().pad(2);
      if(keya === keyb) return 0;
      return keya < keyb ? -1 : 1;
    })
    .reverse();
    
  
  return (
    <Card className={classes.Expenses}>
      <ExpensesFilter
          year={yearFilter}
          onSelectYear={selectYearHandler}
          />
      {sorted.length === 0 ? 
        (
          <p>No Expenses</p>
        ) : (
          sorted.map(ex => (
            <ExpenseItem  
              key={ex.id} 
              item={ex}
              click={props.onPayItem}
              delete={props.onDeleteItem}
              />
          ))
        )
      }
    </Card>
  );
};

export default Expenses;
