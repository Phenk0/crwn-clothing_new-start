import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, StyledShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalQuantity } = useContext(CartContext);
  const toggleCartHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <StyledShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
