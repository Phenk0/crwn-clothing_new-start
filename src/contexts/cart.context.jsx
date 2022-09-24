import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
  setTotalQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(newCartCount);
  }, [cartItems]);

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
