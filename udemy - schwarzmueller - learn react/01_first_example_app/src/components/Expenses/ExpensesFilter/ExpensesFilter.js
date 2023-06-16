
import React from 'react';

import classes from './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const onChangeYearSelector = (event) => {
    props.onSelectYear(event.target.value);
  }

  return (
    <div className={classes.ExpensesFilter}>
      <div className={classes.ExpensesFilterControl}>
        <label>Filter by year</label>
        <select onChange={onChangeYearSelector} value={props.year}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;