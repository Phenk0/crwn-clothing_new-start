import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((category) => (
          <CategoryPreview
            key={category}
            title={category}
            products={categoriesMap[category]}
          />
        ))
      )}
    </>
  );
};

export default CategoriesPreview;
