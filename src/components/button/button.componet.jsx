import "./button.styles.scss";
import Spinner from "../spinner/spinner.component";
const Button = ({ text, classButton, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${classButton}`}
      {...otherProps}
    >
      {text}
    </button>
  );
};
export default Button;
