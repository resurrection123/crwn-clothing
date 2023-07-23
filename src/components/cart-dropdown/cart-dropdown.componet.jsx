import "./cart-dropdown.styles.scss";
import Button from "../button/button.componet";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <img src="" alt="" />
      </div>
      <Button classButton="inverted" text="GO TO CHECKOUT" />
    </div>
  );
};
export default CartDropDown;
