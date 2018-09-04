import { SET_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}
