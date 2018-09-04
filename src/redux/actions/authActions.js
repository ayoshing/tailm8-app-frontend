import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwtDecode from "jwt-decode";

const API_USERS_URL = "http://localhost:3001/api/users";
const API_PROFILE_URL = "http://localhost:3001/api/profile";
const API_POSTS_URL = "http://localhost:3001/api/posts";

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
      history.push("/");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decodedJwt => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedJwt
  };
};

export const createProfile = (profileData, history) => dispatch => {
  let jwt = localStorage.jwt;

  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt
    },
    body: JSON.stringify({ profileData })
  };

  fetch(API_PROFILE_URL, config)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Profile Error");
    })
    .then(json => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
