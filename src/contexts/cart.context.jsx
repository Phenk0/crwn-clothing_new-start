import { createContext, useState, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const decreaseCartItem = (cartItems, productToDecrease) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToDecrease.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDecrease.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const removeProduct = (cartItems, productToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
  setTotalQuantity: () => {},
  decreaseItemInCart: () => {},
  removeItemFromCart: () => {},
  total: 0,
  setTotal: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  total: 0,
};
export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  SET_TOTAL_QUANTITY: "SET_TOTAL_QUANTITY",
  DECREASE_ITEM_IN_CART: "DECREASE_ITEM_IN_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  SET_TOTAL: "SET_TOTAL",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };

    // case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
    //   return {...state, cartItems: payload};
    //
    // case CART_ACTION_TYPES.SET_TOTAL_QUANTITY:
    //   return {...state, totalQuantity: payload};
    //
    // case CART_ACTION_TYPES.DECREASE_ITEM_IN_CART:
    //   return {...state, cartItems: payload};
    //
    // case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
    //   return {...state, cartItems: payload};

    // case CART_ACTION_TYPES.SET_TOTAL:
    //   return {...state, total: payload};

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, totalQuantity, total, isCartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const updateCartItemsReducer = (newCartItems) => {
    console.log(newCartItems);
    const newCartCount = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
    const newTotalCount = newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    dispatch({
      type: "SET_CART_ITEMS",
      payload: { cartItems: newCartItems, totalQuantity: newCartCount, total: newTotalCount },
    });
  };
  const setIsCartOpen = () => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: !isCartOpen,
    });
  };

  const addItemToCart = (productToAdd) => {
    updateCartItemsReducer(addCartItem(cartItems, productToAdd));
  };
  const decreaseItemInCart = (productToDecrease) => {
    updateCartItemsReducer(decreaseCartItem(cartItems, productToDecrease));
  };
  const removeItemFromCart = (productToRemove) => {
    updateCartItemsReducer(removeProduct(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    totalQuantity,
    decreaseItemInCart,
    removeItemFromCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
