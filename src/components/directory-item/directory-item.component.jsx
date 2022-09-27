import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  const navigate = useNavigate();
  const clickCategoryHandler = (event) => {
    navigate(`/shop/${title}`);
  };
  return (
    <div onClick={clickCategoryHandler} className="directory-item-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default DirectoryItem;
