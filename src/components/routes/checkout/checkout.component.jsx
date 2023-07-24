import "./checkout.styles.scss";
import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";
import CheckoutItem from "../../checkout-item/checkout-item.componet";
const Checkout = () => {
  const { productsList, totalAmountCart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>checkout</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quanitty</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {productsList.map((el) => (
        <CheckoutItem key={el.id} CheckoutItem={el} />
      ))}
      <span className="Total">{`Total: ${
        totalAmountCart ? totalAmountCart : 0
      } $`}</span>
    </div>
  );
};

export default Checkout;
