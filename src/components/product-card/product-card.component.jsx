import "./product-card.styles.scss";
import Button from "../button/button.componet";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price"> {price}</span>
      </div>
      <Button classButton="inverted" text="Add to cart" />
    </div>
  );
};
export default ProductCard;
