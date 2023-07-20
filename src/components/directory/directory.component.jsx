import Categoryitem from "../category-item/category.component";
import "./directory.style.scss";

const Directory = ({ category }) => {
  return (
    <div className="directory-container">
      {category.map((el) => (
        <Categoryitem key={el.id} category={el} />
      ))}
    </div>
  );
};
export default Directory;
