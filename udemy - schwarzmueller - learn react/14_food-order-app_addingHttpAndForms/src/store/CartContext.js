import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
  cartItems: [],
  customer: null,
  checkedOut: false,
  checkout: () => {},
  addCustomer: (customer) => {},
  updateItem: (newItem) => {},
  clearItem: (id) => {},
  countItems: () => {},
  getTotalAmount: () => {},
  clearCart: () => {},
});

export const CartContextProvider = (props) => {
  const [getCartItems, setCartItems] = useState([]);
  const [getCustomer, setCustomer] = useState(null);
  const [isCheckedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    const localStoreItems = localStorage.getItem("storedCartItems");
    const storedCartItems = JSON.parse(localStoreItems);
    if (storedCartItems && storedCartItems.length >= 0) {
      setCartItems([...storedCartItems]);
    }
  }, []);

  useEffect(() => {
    const localStoreCustomer = localStorage.getItem("storedCustomer");
    const storedCustomer = JSON.parse(localStoreCustomer);
    if (storedCustomer) {
      setCustomer(storedCustomer);
    }
  }, []);

  const addCustomer = (customer) => {
    let newCustomer = customer;
    setCustomer((prev) => {
      newCustomer = prev || customer;
      return newCustomer;
    });
    updateLocalStore(null, newCustomer);
  };

  const checkout = () => {
    setCheckedOut(true);
  };

  const updateItem = (newItem) => {
    setCartItems((prev) => {
      let items = [...prev];
      const item = items.filter((i) => i.id === newItem.id);
      if (item[0]) {
        item[0].amount += newItem.amount;
        if (item[0].amount < 1) {
          items = items.filter((i) => i.id !== item[0].id);
        }
      } else {
        items.unshift(newItem);
      }
      updateLocalStore(items);
      return items;
    });
  };

  const clearItem = (id) => {
    setCartItems((prev) => {
      let items = [...prev];
      if (id === "x") {
        items = [];
      } else {
        items = items.filter((i) => i.id !== id);
      }
      updateLocalStore(items);
      return items;
    });
  };

  const clearCart = () => {
    setCartItems((prev) => []);
    setCustomer(null);
    setCheckedOut(false);
    localStorage.removeItem("storedCartItems");
  };

  const updateLocalStore = (items, customer = null) => {
    if (items && items.length > 0)
      localStorage.setItem("storedCartItems", JSON.stringify(items));
    if (customer)
      localStorage.setItem("storedCustomer", JSON.stringify(customer));
  };

  const countItems = () => {
    let count = [...getCartItems].reduce((a, b) => a + (+b.amount || 0), 0);
    return count;
  };

  const totalAmount = () => {
    let total = [...getCartItems].reduce((a, b) => a + +b.price * +b.amount, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: getCartItems,
        customer: getCustomer,
        checkedOut: isCheckedOut,
        checkout: () => checkout(),
        updateItem: (newItem) => {
          updateItem(newItem);
        },
        addCustomer: (customer) => addCustomer(customer),
        clearItem: (id) => clearItem(id),
        clearCart: () => clearCart(),
        countItems: () => countItems(),
        getTotalAmount: () => totalAmount(),
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
