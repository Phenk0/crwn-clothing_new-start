import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>➖</span>
        <span className="price">{quantity}</span>
        <span>➕</span>
        <span>{price}</span>
        <span>✖️</span>
      </div>
    </div>
  );
};
export default CheckoutItem;
