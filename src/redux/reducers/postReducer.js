import {
  GET_ALL_POSTS,
  CLICKED_CHAT_DIAL,
  CLICKED_POST_DIAL,
  CLICKED_EVENT_DIAL
} from "../actions/types";

const initialState = {
  posts: [],
  dialAction: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLICKED_CHAT_DIAL:
      return {
        ...state,
        dialAction: action.payload
      };
    case CLICKED_POST_DIAL:
      return {
        ...state,
        dialAction: action.payload
      };
    case CLICKED_EVENT_DIAL:
      return {
        ...state,
        dialAction: action.payload
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
}
