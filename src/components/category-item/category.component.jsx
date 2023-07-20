import "./category-item.style.scss";

const Categoryitem = ({ category }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>shop</p>
      </div>
    </div>
  );
};

export default Categoryitem;
