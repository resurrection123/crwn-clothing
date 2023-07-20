import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAesirQ4vBGg90j7mqhi5pEo7C5Ak5bYhA",
  authDomain: "crn-db-ae75b.firebaseapp.com",
  projectId: "crn-db-ae75b",
  storageBucket: "crn-db-ae75b.appspot.com",
  messagingSenderId: "595444299340",
  appId: "1:595444299340:web:d10a7bb33dcdc34442e6e9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnaposhot = await getDoc(userDocRef);
  if (userSnaposhot.exists()) return userDocRef;
  const { displayName, email } = userAuth;
  const createAt = new Date();
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt
    });
  } catch (error) {
    throw new Error("Issue creating user" + error.meessage);
  }
}