import "./button.styles.scss";
const Button = ({ text, classButton, ...otherProps }) => {
  return (
    <button className={`button-container ${classButton}`} {...otherProps}>
      {text}
    </button>
  );
};
export default Button;
