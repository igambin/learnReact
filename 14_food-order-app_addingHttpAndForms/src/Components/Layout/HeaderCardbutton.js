import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const btnClasses= `${classes.button} ${btnIsHighlighted && classes.bump}`;

  const {cartItems} = cartCtx;

  useEffect(
    () => {
      if(cartItems.length === 0) return;

      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
      
    }, [cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        {cartCtx.countItems()}
      </span>
    </button>
  );
};

export default HeaderCartButton;