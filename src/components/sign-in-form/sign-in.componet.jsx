import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in.styles.scss";
import Button from "../button/button.componet";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utilis";

const defaultFormFields = {
  email: "",
  password: "",
};
const SingIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const signInWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      await createUserDocumentFromAuth(response.user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          console.log("Wrong Password");
          break;
        case "auth/user-not-found":
          console.log("User not exsist");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h1>I already have an account</h1>
      <span>sign In with your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          label="Email"
          onChange={handleChange}
          value={email}
          name="email"
          type="email"
          required
        />

        <FormInput
          label="password"
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          required
        />
        <div className="buttons-container">
          <Button text="Sign In" classButton="inverted" type="submit" />
          <Button
            text="Sign In with Google"
            onClick={signInWithGoogle}
            classButton="google"
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SingIn;
