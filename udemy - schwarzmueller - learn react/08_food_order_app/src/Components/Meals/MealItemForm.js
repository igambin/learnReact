import React, { useRef } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const miRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('add ' + miRef.current.value + ' item ' + props.id);
    props.onAddOrUpdateItem(props.id, +miRef.current.value)
  };

  return (
    <form 
      className={classes.form}
      onSubmit={submitHandler}>
      <Input label="Amount" input={{
        id: 'amount'+props.id,
        ref: miRef,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'}} />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;