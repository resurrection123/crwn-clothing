import { Fragment, useContext } from "react";
import { UserContext } from "../../../contexts/user.context";

import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../../asset/crown.svg";
import CartDropDown from "../../cart-dropdown/cart-dropdown.componet";
import CartIcon from "../../cart-icon/cart-icon.component";
import { CartContext } from "../../../contexts/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { toggle } = useContext(CartContext);

  console.log(toggle);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/shop">
            Contact
          </Link>
          {currentUser ? (
            <span className="nav-link">SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/sign-in">
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
