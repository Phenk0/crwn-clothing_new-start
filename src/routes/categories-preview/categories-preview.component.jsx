import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div>
      {Object.keys(categoriesMap).map((category) => (
        <CategoryPreview key={category} title={category} products={categoriesMap[category]} />
      ))}
    </div>
  );
};

export default CategoriesPreview;
