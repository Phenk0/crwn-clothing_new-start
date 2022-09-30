import "./directory-item.styles";
import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();
  const clickCategoryHandler = (event) => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={clickCategoryHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;