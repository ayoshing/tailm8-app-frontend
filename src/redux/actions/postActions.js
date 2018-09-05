import {
  GET_ERRORS,
  CLICKED_CHAT_DIAL,
  CLICKED_POST_DIAL,
  CLICKED_EVENT_DIAL
} from "./types";

const API_POSTS_URL = "http://localhost:3001/api/posts";

export const createPost = (postData, history) => dispatch => {
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
      dispatch({});
      history.push("/");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
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
