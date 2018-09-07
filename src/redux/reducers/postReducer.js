import {
  GET_ERRORS,
  GET_ALL_POSTS,
  OPEN_POST_SNACKBAR,
  CLOSE_POST_SNACKBAR,
  OPEN_POST_DIALOG,
  CLOSE_POST_DIALOG
} from "../actions/types";

const initialState = {
  posts: [],
  dialAction: "",
  isPosted: false,
  snackBarOpen: false,
  snackBarVertical: "bottom",
  snackBarHorizontal: "left",
  snackBarMsg: "Post Success!",
  dialogOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case OPEN_POST_SNACKBAR:
      return {
        ...state,
        snackBarOpen: true
      };
    case CLOSE_POST_SNACKBAR:
      return {
        ...state,
        snackBarOpen: false
      };
    case OPEN_POST_DIALOG:
      return {
        ...state,
        dialogOpen: true
      };
    case CLOSE_POST_DIALOG:
      return {
        ...state,
        dialogOpen: false
      };
    default:
      return state;
  }
}
