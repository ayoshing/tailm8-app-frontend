import {
  GET_ALL_POSTS,
  OPEN_POST_SNACKBAR,
  CLOSE_POST_SNACKBAR,
  OPEN_POST_DIALOG,
  CLOSE_POST_DIALOG,
  GET_ERRORS,
  CLEAR_ERRORS,
  CLICK_LIKE
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

  return fetch(API_POSTS_URL, config).then(res => {
    if (res.status === 400) {
      res.json().then(json => {
        dispatch({
          type: GET_ERRORS,
          payload: json
        });
      });
    } else {
      dispatch(clearErrorsAction());
      res
        .json()
        .then(json => {
          dispatch(openSnackBarAction("Post Success"));
          history.push("/");
        })
        .then(json => {
          dispatch(getPostsAction());
        });
    }
  });
};

export const getPostsAction = () => dispatch => {
  fetch(API_POSTS_URL)
    // .then(res => {
    //   if (res.ok) {
    //     return res.json();
    //   }
    //   throw new Error("Unable To Get Posts");
    // })
    .then(res => res.json())
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

export const clearErrorsAction = () => ({ type: CLEAR_ERRORS });

export const clickLikeAction = postId => dispatch => {
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.jwt
    }
  };

  fetch(`${API_POSTS_URL}/${postId}/likes`, config)
    // .then(res => {
    //   if (res.ok) {
    //     return res.json();
    //   }
    //   throw new Error("Post Error");
    // })
    .then(res => res.json())
    .then(json => dispatch(getPostsAction()));
};
