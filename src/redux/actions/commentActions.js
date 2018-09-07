import { GET_ALL_COMMENTS } from "./types";

const API_POSTS_URL = "http://localhost:3001/api/posts";

export const createPostAction = (postData, history) => dispatch => {
  let postId = postData._id;
  let postFields = {
    content: postData.content,
    imgUrl: postData.imgUrl
  };

  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.jwt
    },
    body: JSON.stringify(postFields)
  };

  fetch(`${API_POSTS_URL}/${postId}/comments`, config)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Post Error");
    })
    .then(json => dispatch(getCommentsAction()));
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
