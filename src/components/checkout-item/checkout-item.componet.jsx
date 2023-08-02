import "./checkout.styles.scss";
import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ CheckoutItem }) => {
  const { name, imageUrl, price, quantity } = CheckoutItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const hanlerRemove = () =>
    dispatch(clearItemFromCart(cartItems, CheckoutItem));
  const addQuantityItemHandler = () =>
    dispatch(addItemToCart(cartItems, CheckoutItem));
  const removeQuantityItemHandler = () =>
    dispatch(removeItemToCart(cartItems, CheckoutItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={removeQuantityItemHandler}>
          &#10094;
        </span>
        <span className="quantity-value">{quantity}</span>
        <span className="arrow" onClick={addQuantityItemHandler}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={hanlerRemove}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
