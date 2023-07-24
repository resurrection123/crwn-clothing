import "./cart-dropdown.styles.scss";
import Button from "../button/button.componet";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { productsList, setToggle } = useContext(CartContext);
  const nagivate = useNavigate();
  const goToCheckoutHandler = () => {
    nagivate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {productsList &&
          productsList.map((el) => <CartItem key={el.id} cartItem={el} />)}
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
