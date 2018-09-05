import { GET_ERRORS, GET_PROFILE, PROFILE_LOADING } from "./types";

const API_PROFILE_URL = "http://localhost:3001/api/profile";

export const createProfile = (profileData, history) => dispatch => {
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.jwt
    },
    body: JSON.stringify(profileData)
  };

  fetch(API_PROFILE_URL, config)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Profile Error");
    })
    .then(json => {
      dispatch({
        type: GET_PROFILE,
        payload: json
      });
      history.push("/");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getCurrentProfileAction = userId => dispatch => {
  dispatch(profileLoadingAction());

  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.jwt
    }
  };

  fetch(API_PROFILE_URL, config)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Get profile error");
    })
    .then(json =>
      dispatch({
        type: GET_PROFILE,
        payload: json
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

export const profileLoadingAction = () => {
  return {
    type: PROFILE_LOADING
  };
};
