import {
  GET_ALL_POSTS,
  OPEN_POST_SNACKBAR,
  CLOSE_POST_SNACKBAR,
  OPEN_POST_DIALOG,
  CLOSE_POST_DIALOG
} from "./types";

const API_POSTS_URL = "http://localhost:3001/api/posts";

export const createPostAction = (postData, history) => dispatch => {
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.jwt
    },
    body: JSON.stringify(postData)
  };

  fetch(API_POSTS_URL, config)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Post Error");
    })
    .then(json => {
      dispatch(openSnackBarAction("Post Success"));
      history.push("/");
    })
    .then(json => dispatch(getPostsAction()));
  // .catch(err =>
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response
  //   })
  // );
};

export const getPostsAction = () => dispatch => {
  fetch(API_POSTS_URL)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Unable To Get Posts");
    })
    .then(json => {
      dispatch({
        type: GET_ALL_POSTS,
        payload: json
      });
    });
};

export const openSnackBarAction = msg => {
  return {
    type: OPEN_POST_SNACKBAR,
    payload: msg
  };
};

export const closeSnackBarAction = () => {
  return {
    type: CLOSE_POST_SNACKBAR
  };
};

export const openDialogAction = () => {
  return {
    type: OPEN_POST_DIALOG
  };
};

export const closeDialogAction = () => {
  return {
    type: CLOSE_POST_DIALOG
  };
};
