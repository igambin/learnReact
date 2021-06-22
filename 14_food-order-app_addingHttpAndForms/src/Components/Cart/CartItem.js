import React, { useContext } from 'react';import CartContext from '../../store/CartContext';
import { EuroFormatter } from '../../store/Util';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  const updateItem = (x) => {
    cartContext.updateItem(
      {
        id: props.id,
        amount: x
      });
  }

  const removeItem = (id) => {
    cartContext.clearItems(id);
  }

  const price = EuroFormatter.format(props.price);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => updateItem(-1)}>−</button>
        <button onClick={() => updateItem(1)}>+</button>
        <button onClick={() => removeItem(props.id)}>X</button>
      </div>
    </li>
  );
};

export default CartItem;