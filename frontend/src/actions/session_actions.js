import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// This will be used to redirect the user to the login page upon signup
export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

//signup a user
export const signup = (userData) => dispatch =>
  APIUtil.signup(userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    }, err => (
      dispatch(receiveErrors(err.response.data))
    ));

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = userData => dispatch =>
  APIUtil.login(userData)
    .then(res => {
    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded));
    }, err => (
      dispatch(receiveErrors(err.response.data))
    ));
    
export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem("jwtToken");
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false);
    // Dispatch a logout action
    dispatch(logoutUser());
};

export const fetchUser = userId => dispatch => {
  APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => dispatch(receiveErrors(err.responseJSON))
  );
}