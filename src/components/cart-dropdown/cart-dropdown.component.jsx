import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  // const { cart } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {/*{cart &&*/}
        {/*  cart.map((product) => {*/}
        {/*    console.log(product);*/}
        {/*    return <div>d</div>;*/}
        {/*  })}*/}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};
export default CartDropdown;
