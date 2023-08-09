import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../../asset/crown.svg";
import CartDropDown from "../../cart-dropdown/cart-dropdown.componet";
import CartIcon from "../../cart-icon/cart-icon.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { signOutStart } from "../../../store/user/user.action";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const toggle = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(signOutStart());
  };
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
            <span className="nav-link" onClick={logOut}>
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
