import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../store/cart-slice";
import { visibilityActions } from "../../store/visibility-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItems);

  const toggleShowCart = (event) => {
    dispatch(visibilityActions.toggleShowCart());
  };

  return (
    <button className={classes.button} onClick={toggleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
