import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../../utils/firebase/firebase.utilis";
import SignUp from "../../sign-up-form/sign-up.component";
const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
    })();
  }, []);
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
