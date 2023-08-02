import { Fragment } from "react";

import CategoryPreview from "../../category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectFetchStatus,
} from "../../../store/categories/category.selector";
import Spinner from "../../spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectFetchStatus);
  const categoryEntries = Object.entries(categories);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        categoryEntries.map(([key, elements]) => (
          <Fragment key={key}>
            <CategoryPreview key={key} title={key} product={elements} />
          </Fragment>
        ))
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
