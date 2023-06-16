import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import { EuroFormatter } from '../../store/Util';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.cartItems.map(
    cartItem => (
      <CartItem
        key={cartItem.id}
        id={cartItem.id}
        name={cartItem.name}
        price={cartItem.price}
        amount={cartItem.amount}
        />
    ));

  const totalAmount = EuroFormatter.format(cartContext.getTotalAmount());

  return (
    <Modal className={classes.cart} onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
         <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
         {cartContext.countItems() > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;