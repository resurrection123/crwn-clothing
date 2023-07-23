import { ShopContext } from "../../../contexts/shop.context";
import { useContext } from "react";
import ProductCard from "../../product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div className="products-container">
      {products.map((el) => (
        <ProductCard key={el.id} product={el} />
      ))}
    </div>
  );
};

export default Shop;
