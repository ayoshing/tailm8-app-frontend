import {
  GET_ALL_COMMENTS,
  OPEN_COMMENT_DIALOG,
  CLOSE_COMMENT_DIALOG
} from "./types";
import { openSnackBarAction } from "./postActions";

const API_POSTS_URL = "http://localhost:3001/api/posts";

export const createCommentAction = (
  commentData,
  postId,
  history
) => dispatch => {
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.jwt
    },
    body: JSON.stringify(commentData)
  };

  fetch(`${API_POSTS_URL}/${postId}/comments`, config)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Post Error");
    })
    .then(json => {
      dispatch(openSnackBarAction("Comment Added"));
      // history.push("/");
    })
    .then(json => dispatch(getCommentsAction(postId)));
};

export const getCommentsAction = postId => dispatch => {
  fetch(`${API_POSTS_URL}/${postId}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Unable To Get Posts");
    })
    .then(json => {
      dispatch({
        type: GET_ALL_COMMENTS,
        payload: json
      });
    });
};

export const openCommentDialogAction = postId => {
  return {
    type: OPEN_COMMENT_DIALOG,
    payload: postId
  };
};

export const closeCommentDialogAction = () => {
  return {
    type: CLOSE_COMMENT_DIALOG
  };
};
