import { useContext } from "react";

import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-items">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Purchase</Button>
    </div>
  );
};

export default Checkout;
