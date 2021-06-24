import { visibilityActions } from "./visibility-slice";
import { v4 as uuidv4 } from "uuid";
import { cartActions } from "./cart-slice";

const getOrCreateUserId = () => {
  const userIdentifier = localStorage.getItem("userIdentifier");
  const userId =
    userIdentifier && userIdentifier !== "undefined"
      ? userIdentifier
      : uuidv4();
  localStorage.setItem("userIdentifier", userId);
  return userId;
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://myreactlearning-8430a-default-rtdb.europe-west1.firebasedatabase.app/carts/${getOrCreateUserId()}/cart.json`
      );
      if (!response.ok) {
        throw new Error(response.error);
      }
      return await response.json();
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cartItems || [],
          totalItems: cartData.totalItems,
          totalPrice: cartData.totalPrice,
        })
      );
    } catch (error) {
      dispatch(
        visibilityActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Loading cart data failed: " + error.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      visibilityActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Storing cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://myreactlearning-8430a-default-rtdb.europe-west1.firebasedatabase.app/carts/${getOrCreateUserId()}/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        visibilityActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Stored cart successfully!",
        })
      );
    } catch (error) {
      dispatch(
        visibilityActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Storing cart failed: " + error.message,
        })
      );
      return;
    }

    setTimeout(() => {
      dispatch(visibilityActions.clearNotification());
    }, 2000);
  };
};
