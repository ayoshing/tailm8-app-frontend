import {
  GET_ERRORS,
  CLICKED_CHAT_DIAL,
  CLICKED_POST_DIAL,
  CLICKED_EVENT_DIAL,
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
      dispatch(openSnackBarAction());
      history.push("/");
    });
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

export const clickedPostDial = dialAction => {
  return {
    type: CLICKED_POST_DIAL,
    payload: dialAction
  };
};

export const clickedChatDial = dialAction => {
  return {
    type: CLICKED_CHAT_DIAL,
    payload: dialAction
  };
};

export const clickedEventDial = dialAction => {
  return {
    type: CLICKED_EVENT_DIAL,
    payload: dialAction
  };
};

export const openSnackBarAction = () => {
  return {
    type: OPEN_POST_SNACKBAR
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
