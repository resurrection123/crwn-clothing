import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import USER_ACTION_TYPES from './user.types'
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutFailed, signOutSuccess } from './user.action'
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthWithEmailAndPassword, createAuthWithEmailAndPassword, signOutUser } from '../../utils/firebase/firebase.utilis'

export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnaposhot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
    yield put(signInSuccess({ id: userSnaposhot.id, ...userSnaposhot }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {

  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));

  }
}
export function* signInWithGoogle() {

  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    switch (error.code) {
      case "auth/wrong-password":
        yield put(signInFailed("Wrong Password"));
        break;
      case "auth/user-not-found":
        yield put(signInFailed("User not exist"));
        break;
      default:
        yield put(signInFailed(error));

    }
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInAuthWithEmailAndPassword, email, password);
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthWithEmailAndPassword, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapShotFromUserAuth, user, additionalDetails)
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)

}
export function* onSignInWithEmail() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)

}
export function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)

}
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)

}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);

}
export function* userSagas() {
  yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onSignInWithEmail), call(onSignOut), call(onSignUpStart), call(onSignUpSuccess)])

}