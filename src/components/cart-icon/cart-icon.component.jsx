import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
const CartIcon = () => {
  const { toggle, setToggle, count } = useContext(CartContext);
  const handlerCart = () => {
    setToggle(!toggle);
  };

  return (
    <div className="cart-icon-container" onClick={handlerCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
