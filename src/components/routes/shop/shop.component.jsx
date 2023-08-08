import CategoriesPreview from "../categories-preview/categories-preview.component";
import "./shop.styles.scss";
import Category from "../category/category.component";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../../store/categories/category.action";
import { useEffect } from "react";
const Shop = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(fetchCategoriesStart());
  }, [dispacth]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
