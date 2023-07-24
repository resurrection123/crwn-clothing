import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ CheckoutItem }) => {
  const { name, imageUrl, price, quantity } = CheckoutItem;
  const {
    addQuantityItemToCart,
    removeQuantityItemFromCart,
    removeItemFromCart,
  } = useContext(CartContext);
  const hanlerRemove = () => removeItemFromCart(CheckoutItem);
  const addQuantityItemHandler = () => addQuantityItemToCart(CheckoutItem);
  const removeQuantityItemHandler = () =>
    removeQuantityItemFromCart(CheckoutItem);

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
