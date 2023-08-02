import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../product-card/product-card.component";
import "./category.styles.scss";
import {
  selectCategories,
  selectFetchStatus,
} from "../../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategories);
  const isLoading = useSelector(selectFetchStatus);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>

      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div className="category-container">
          {products &&
            products.map((el) => <ProductCard key={el.id} product={el} />)}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
