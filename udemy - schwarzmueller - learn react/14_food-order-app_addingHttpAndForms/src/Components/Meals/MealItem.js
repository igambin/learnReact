import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import { EuroFormatter } from '../../store/Util';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

  const price = EuroFormatter.format(parseFloat(props.price));

  const addOrUpdateItem = (id, amount) => {
    cartCtx.updateItem({
      id: id,
      name: props.name,
      price: props.price,
      amount: amount
    })
  };


  return (
    <li className={classes.meal}>
      <div>
        <div><h3>{props.name}</h3></div>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm 
        id={props.id} 
        onAddOrUpdateItem={(id, amount) => addOrUpdateItem(id, amount)}
        />
    </li>
  );
};

export default MealItem;