import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  comment: commentReducer
});
