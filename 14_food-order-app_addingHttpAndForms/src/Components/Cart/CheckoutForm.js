import React, { useContext } from "react";
import useInput from "../../hooks/use-input";
import CartContext from "../../store/CartContext";
import FormInput from "../UI/FormInput";
import useHttp from "../../hooks/use-http";
import classes from "./CheckoutForm.module.css";
import { EuroFormatter } from "../../store/Util";

const CheckoutForm = (props) => {
  const cartCtx = useContext(CartContext);
  const isEmptyValidator = (input) => input.trim() !== "";
  const zipValidator = (input) => /^[0-9]{5}$/.test(input.trim());

  const { isLoading, error, sendRequest: sendCreateOrderRequest } = useHttp();

  const firstNameInput = useInput(
    "firstName",
    "First Name",
    "text",
    isEmptyValidator,
    "must not be empty",
    (cartCtx.customer && cartCtx.customer.firstName) || null
  );

  const lastNameInput = useInput(
    "lastName",
    "Last Name",
    "text",
    isEmptyValidator,
    "must not be empty",
    (cartCtx.customer && cartCtx.customer.lastName) || null
  );

  const streetInput = useInput(
    "street",
    "Street",
    "text",
    isEmptyValidator,
    "must not be empty",
    (cartCtx.customer && cartCtx.customer.street) || null
  );

  const cityInput = useInput(
    "city",
    "City",
    "text",
    isEmptyValidator,
    "must not be empty",
    (cartCtx.customer && cartCtx.customer.city) || null
  );

  const zipInput = useInput(
    "zip",
    "Postal Code",
    "text",
    zipValidator,
    "has to be 5 digits",
    (cartCtx.customer && cartCtx.customer.zip) || null
  );

  const inputs = [
    firstNameInput,
    lastNameInput,
    streetInput,
    zipInput,
    cityInput,
  ];

  const finalizeOrder = async (order, orderData) => {
    console.log(order, orderData);
    if (error) return;
    cartCtx.checkout();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const customer = {};
    inputs.forEach((i) => {
      customer[i.name] = i.value;
    });
    cartCtx.addCustomer(customer);

    const order = {
      customer: customer,
      items: cartCtx.cartItems,
      total: EuroFormatter.format(cartCtx.getTotalAmount()),
    };
    console.log(order);

    sendCreateOrderRequest(
      {
        url: "https://myreactlearning-8430a-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        method: "POST",
        body: order,
        headers: {
          "Content-Type": "application/json",
        },
      },
      finalizeOrder.bind(null, order)
    );
  };

  const formIsValid = inputs.every((i) => i.isValid);

  return (
    <div>
      <h2>Checkout</h2>
      <form className={classes.CheckoutForm} onSubmit={onSubmitHandler}>
        <div className={classes["control-group"]}>
          <FormInput input={firstNameInput} />
          <FormInput input={lastNameInput} />
        </div>
        <FormInput input={streetInput} />
        <div className={classes["control-group"]}>
          <FormInput input={zipInput} />
          <FormInput input={cityInput} />
        </div>
        {error && (
          <p className={classes.error}>Placing the order failed! ({error})</p>
        )}
        <div className={classes.actions}>
          <button
            type="button"
            className={classes["button--alt"]}
            onClick={props.onAbortCheckout}
          >
            Abort
          </button>
          <button
            type="submit"
            disabled={!formIsValid}
            className={classes.button}
          >
            {isLoading ? "Sending..." : error ? "Try again?" : "Checkout"}
          </button>
          {error && (
            <p>
              <a href="tel:555-123456">or Order by Phone 555-123456</a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
