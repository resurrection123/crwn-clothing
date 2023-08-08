import { initializeApp } from 'firebase/app'
import {
  getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAesirQ4vBGg90j7mqhi5pEo7C5Ak5bYhA",
  authDomain: "crn-db-ae75b.firebaseapp.com",
  projectId: "crn-db-ae75b",
  storageBucket: "crn-db-ae75b.appspot.com",
  messagingSenderId: "595444299340",
  appId: "1:595444299340:web:d10a7bb33dcdc34442e6e9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectToAdd.forEach(element => {
    const docRef = doc(collectionRef, element.title.toLowerCase());
    batch.set(docRef, element)
  });
  await batch.commit();
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnaposhot = await getDoc(userDocRef);
  if (userSnaposhot.exists()) return userDocRef;
  const { displayName, email } = userAuth;
  const createAt = new Date();
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt,
      ...additionalInformation
    });
  } catch (error) {
    throw new Error("Issue creating user " + error);
  }
  return userSnaposhot;
}
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(el => el.data())
}
export const createAuthWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) throw new Error('Email or password is wrong')
    return await createUserWithEmailAndPassword(auth, email, password)

  } catch (error) {
    throw error
  }
}
export const signInAuthWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) throw new Error('Email or password is wrong')
    return await signInWithEmailAndPassword(auth, email, password)

  } catch (error) {
    throw error
  }
}

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (fn) => onAuthStateChanged(auth, fn);


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
      unSubscribe();
      resolve(userAuth);
    },
      reject
    );
  })
}