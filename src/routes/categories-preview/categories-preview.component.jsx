import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((category) => (
        <CategoryPreview key={category} title={category} products={categoriesMap[category]} />
      ))}
    </div>
  );
};

export default CategoriesPreview;
