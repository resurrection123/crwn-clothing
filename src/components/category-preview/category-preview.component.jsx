import { Fragment } from "react";
import Button from "../button/button.componet";
import "./category-preview.styles.scss";

import { Link } from "react-router-dom";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CategoryPreview = ({ title, product }) => {
  const preview = product.slice(0, 6);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCart = (arr) => {
    dispatch(addItemToCart(cartItems, arr));
  };
  return (
    <Fragment>
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="products-container">
        {preview.map((el) => (
          <div key={el.id} className="product-card-container">
            <img src={el.imageUrl} alt={el.name} />
            <div className="footer">
              <span className="name">{el.name}</span>
              <span className="price">{el.price}</span>
            </div>
            <Button
              classButton="inverted"
              text="Add to cart"
              onClick={() => addProductToCart(el)}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CategoryPreview;
