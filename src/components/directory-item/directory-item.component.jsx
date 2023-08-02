import "./directory-item.style.scss";

const DirectoryItem = ({ category }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      ></div>
      <div className="body">
        <h2>{category.title}</h2>
        <p>shop</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
