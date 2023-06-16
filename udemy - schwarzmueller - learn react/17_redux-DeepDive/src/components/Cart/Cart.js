import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.totalPrice);

  const cartItemsContent = cartItems.map((c) => (
    <CartItem
      key={c.id}
      item={{
        id: c.id,
        title: c.title,
        quantity: c.amount,
        total: c.price * c.amount,
        price: c.price,
      }}
    />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemsContent}</ul>
      <div className={classes.right}>
        <h3>Total: $ {cartTotal.toFixed(2)}</h3>
      </div>
    </Card>
  );
};

export default Cart;
