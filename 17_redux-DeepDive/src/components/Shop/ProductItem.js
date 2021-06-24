import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const p = props.product;

  const addToCart = (event) => {
    dispatch(cartActions.addItem(p));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{p.title}</h3>
          <div className={classes.price}>${p.price.toFixed(2)}</div>
        </header>
        <p>{p.desc}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
