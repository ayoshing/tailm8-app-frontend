import { OPEN_COMMENT_DIALOG, CLOSE_COMMENT_DIALOG } from "./types";
import { openSnackBarAction, getPostsAction } from "./postActions";

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
    })
    .then(json => dispatch(getPostsAction()));
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
