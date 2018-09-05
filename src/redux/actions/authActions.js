import { GET_ERRORS, SET_CURRENT_USER, LOGOUT_CURRENT_USER } from "./types";
import jwtDecode from "jwt-decode";
import { getCurrentProfileAction } from "./profileActions";

const API_USERS_URL = "http://localhost:3001/api/users";

export const signUpUser = (userData, history) => dispatch => {
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  };

  fetch(API_USERS_URL, config)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const logInUser = (userData, history) => dispatch => {
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  };

  fetch(`${API_USERS_URL}/login`, config)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Login Error");
    })
    .then(json => {
      const { token } = json;
      localStorage.setItem("jwt", token);
      const decodedJwt = jwtDecode(token);
      dispatch(setCurrentUser(decodedJwt));
      dispatch(getCurrentProfileAction(decodedJwt.id));
      history.push("/profile/edit");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    );
};

export const getCurrentUser = () => dispatch => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.jwt
    }
  };

  fetch(`${API_USERS_URL}/current`, config)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Can't fetch current user");
    })
    .then(json => dispatch(setCurrentUser(json)));
};

export const setCurrentUser = decodedJwt => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedJwt
  };
};

export const logOutUserAction = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};
