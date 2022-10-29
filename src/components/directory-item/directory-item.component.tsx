import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Category } from "../directory/directory.component";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: Category;
};

const DirectoryItem: FC<DirectoryItemProps> = ({
  category: { title, imageUrl, route },
}) => {
  const navigate = useNavigate();
  const clickCategoryHandler = () => {
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
