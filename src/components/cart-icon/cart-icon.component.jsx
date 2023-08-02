import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";

const CartIcon = () => {
  const dispacth = useDispatch();
  const toggle = useSelector(selectIsCartOpen);
  const count = useSelector(selectCartCount);
  const handlerCart = () => {
    dispacth(setIsCartOpen(!toggle));
  };

  return (
    <div className="cart-icon-container" onClick={handlerCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
