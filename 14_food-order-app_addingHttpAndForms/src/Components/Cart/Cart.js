import React, { useContext, useState } from "react";
import { Fragment } from "react";
import CartContext from "../../store/CartContext";
import { EuroFormatter } from "../../store/Util";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const cartItems = cartContext.cartItems.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      id={cartItem.id}
      name={cartItem.name}
      price={cartItem.price}
      amount={cartItem.amount}
    />
  ));

  const totalAmount = EuroFormatter.format(cartContext.getTotalAmount());

  const orderClickHandler = (event) => {
    setShowCheckout(!showCheckout);
  };

  const closeOnCheckedOut = (event) => {
    cartContext.clearCart();
    props.onHideCart();
  };

  const modalContent = cartContext.checkedOut ? (
    <Fragment>
      <p>Thank your for your order!</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeOnCheckedOut}>
          OK
        </button>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <CheckoutForm
          onAbortCheckout={orderClickHandler}
          onHideCart={props.onHideCart}
        />
      )}
      {!showCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {cartContext.countItems() > 0 && (
            <button className={classes.button} onClick={orderClickHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  return (
    <Modal className={classes.cart} onHideCart={props.onHideCart}>
      {modalContent}
    </Modal>
  );
};

export default Cart;
