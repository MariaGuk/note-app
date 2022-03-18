import { auth } from '../firebase';
import * as types from './actionTypes';

const signupStart = () => ({
  type: types.SIGNUP_START,
});

const signupSuccess = user => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});

const signupError = error => ({
  type: types.SIGNUP_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginError = error => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutError = error => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

const setUser = user => ({
  type: types.SET_USER,
  payload: user,
});

export const signupInitiate =
  (dateOfBirthDay, email, firstName, lastName, password) => dispatch => {
    dispatch(signupStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          dateOfBirthDay,
          email,
          firstName,
          lastName,
          password,
        });
        dispatch(
          signupSuccess({
            user: {
              dateOfBirthDay,
              email,
              firstName,
              lastName,
              password,
            },
          })
        );
        localStorage.setItem('userEmail', (user.email));
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            dispatch(signupError(error));
            break;
          case 'auth/invalid-email':
            dispatch(signupError(error));
            break;
          case 'auth/wrong-password':
            dispatch(signupError(error));
            break;
          default:
        }
        alert(signupError(error).payload);
      });
  };

export const loginInitiate = (email, password) => dispatch => {
  dispatch(loginStart());
  auth
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      dispatch(
        loginSuccess({
          user: {
            email: user.email,
            password: user.password,
          },
        })
      );
      localStorage.setItem('userEmail', (user.email));
      localStorage.setItem('user', JSON.stringify(user));

    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
          dispatch(loginError(error));
          break;
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          dispatch(loginError(error));
          break;
        case 'auth/wrong-password':
          dispatch(loginError(error));
          break;
        default:
      }
      alert(loginError(error).payload);
    });
};

export const logoutInitiate = () => dispatch => {
  dispatch(logoutStart());
  auth
    .signOut()
    .then(() => {
      dispatch(logoutSuccess());
      localStorage.removeItem('user');
      localStorage.removeItem('userEmail');
    })
    .catch(error => dispatch(logoutError(error.message)));
};

export { setUser, signupError, loginError, };
