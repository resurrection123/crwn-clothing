import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import Button from "../button/button.componet";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetField = () => {
    setFormFields(defaultFormFields);
  };
  const handlerSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signUpStart(email, password, displayName));
      resetField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        console.log("Cannot create user,email already in use");
      else console.log(error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Display Name"
          onChange={handleChange}
          required
          value={displayName}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="password"
          name="password"
          type="password"
          onChange={handleChange}
          required
          value={password}
        />
        <label htmlFor="">Confirm Password</label>
        <FormInput
          label="Confirm password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          required
          value={confirmPassword}
        />
        <Button text="Sign Up" classButton="inverted" type="submit" />
      </form>
    </div>
  );
};
export default SignUp;
