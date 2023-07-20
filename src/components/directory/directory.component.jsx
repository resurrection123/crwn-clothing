import Categoryitem from "../category-item/category.component";
import "../../categories.style.scss";

const Directory = ({ category }) => {
  return (
    <div className="categories-container">
      {category.map((el) => (
        <Categoryitem key={el.id} category={el} />
      ))}
    </div>
  );
};
export default Directory;
