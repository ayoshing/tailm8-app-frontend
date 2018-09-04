import { GET_ERRORS } from "./types";

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

export const logInUser = userData => dispatch => {
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
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
