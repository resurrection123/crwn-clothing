import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";

const Directory = ({ category }) => {
  return (
    <div className="directory-container">
      {category.map((el) => (
        <DirectoryItem key={el.id} category={el} />
      ))}
    </div>
  );
};
export default Directory;
