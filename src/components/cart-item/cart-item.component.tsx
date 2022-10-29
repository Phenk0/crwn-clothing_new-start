import { FC } from "react";
import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";
import { CartItem as TCartItem } from "../../store/cart/cart.types";

export type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
