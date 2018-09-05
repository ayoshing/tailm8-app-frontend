import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwtDecode from "jwt-decode";
import UserAdapter from "../../apis/UserAdapter";

const API_USERS_URL = "http://localhost:3001/api/users";
const API_POSTS_URL = "http://localhost:3001/api/posts";

// TODO: abstract fetches to UserAdapter
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
        payload: err.response
      })
    );
};

export const getCurrentUser = () => dispatch => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: UserAdapter.getToken()
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
  console.log(decodedJwt);
  return {
    type: SET_CURRENT_USER,
    payload: decodedJwt
  };
};
