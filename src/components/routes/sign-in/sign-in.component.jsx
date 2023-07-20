import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utilis";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(response.user);
      console.log(userDocRef);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
