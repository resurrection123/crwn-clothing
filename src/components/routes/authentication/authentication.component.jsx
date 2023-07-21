import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth } from "../../../utils/firebase/firebase.utilis";
import SignUpFrom from "../../sign-up-form/sign-up.component";
import SignInForm from "../../sign-in-form/sign-in.componet";
import "./authentication.styles.scss";
const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
    })();
  }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpFrom />
    </div>
  );
};

export default SignIn;
