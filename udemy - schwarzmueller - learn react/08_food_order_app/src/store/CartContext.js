import React, {useEffect, useState} from 'react';

const CartContext = React.createContext(
  {
    cartItems: [],
    updateItem: (newItem) => {},
    clearItems: (id) => {},
    countItems: () => {},
    getTotalAmount: () => {}
  }
);

export const CartContextProvider = (props) => {
  const [getCartItems, setCartItems] = useState([]);

  useEffect(() => {
    const localStoreValue = localStorage.getItem('storedCartItems');
    const storedCartItems = JSON.parse(localStoreValue);
    if(storedCartItems && storedCartItems.length >= 0){
      setCartItems([...storedCartItems]);
    }
  }, []);

  const updateItem = (newItem) => {
    setCartItems(prev => {
      let items = [...prev];
      const item  = items.filter(i => i.id === newItem.id);
      if(item[0]) {
        item[0].amount += newItem.amount;
        if(item[0].amount < 1) {
          items = items.filter(i => i.id !== item[0].id);
        }
      } else {
        items.unshift(newItem);
      }
      updateLocalStore(items);
      return items;
    });
  };

  const clearItems = (id) => {
    setCartItems(prev => {
      let items = [...prev];
      if(id === 'x') 
      {
        items = [];
      } else {
        items = items.filter(i => i.id !== id );
      }
      updateLocalStore(items);
      return items;
    });
  };

  const updateLocalStore = (items) => {
    localStorage.setItem('storedCartItems', JSON.stringify(items));
  }
  const countItems = () => {
    let count = [...getCartItems].reduce((a, b) => a + ( +b.amount || 0), 0);
    return count;
  }

  const totalAmount = () => {
    let total = [...getCartItems].reduce((a, b) => a + ( +b.price * + b.amount), 0);
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: getCartItems,
        updateItem: (newItem) => {updateItem(newItem)},
        clearItems: (id) => clearItems(id),
        countItems: () => countItems(),
        getTotalAmount: () => totalAmount()
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
