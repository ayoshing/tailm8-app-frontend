import { GET_ERRORS, GET_PROFILE } from "./types";
import UserAdapter from "../../apis/UserAdapter";

const API_PROFILE_URL = "http://localhost:3001/api/profile";

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

export const getProfileAction = () => dispatch => {
  UserAdapter.getUserProfile().then(json => console.log(json));
};
