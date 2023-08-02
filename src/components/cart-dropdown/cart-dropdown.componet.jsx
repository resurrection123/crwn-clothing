import "./cart-dropdown.styles.scss";
import Button from "../button/button.componet";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const nagivate = useNavigate();
  const goToCheckoutHandler = () => {
    nagivate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((el) => <CartItem key={el.id} cartItem={el} />)}
      </div>

      <Button
        classButton="inverted"
        text="GO TO CHECKOUT"
        onClick={goToCheckoutHandler}
      />
    </div>
  );
};
export default CartDropDown;
