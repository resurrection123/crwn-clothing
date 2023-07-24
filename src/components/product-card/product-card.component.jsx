import "./product-card.styles.scss";
import Button from "../button/button.componet";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addQuantityItemToCart } = useContext(CartContext);

  const addProductToCart = () => addQuantityItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        classButton="inverted"
        text="Add to cart"
        onClick={addProductToCart}
      />
    </div>
  );
};
export default ProductCard;
