import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../../asset/crown.svg";
import CartDropDown from "../../cart-dropdown/cart-dropdown.componet";
import CartIcon from "../../cart-icon/cart-icon.component";
import { useSelector } from "react-redux";
import { selectCurrrentUser } from "../../../store/user/user.selector";
import { signOutUser } from "../../../utils/firebase/firebase.utilis";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrrentUser);
  const toggle = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="contact">
            Contact
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="sign-in">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {toggle && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
