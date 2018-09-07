import {
  GET_ERRORS,
  GET_PROFILE,
  PROFILE_LOADING,
  RESET_PROFILE,
  OPEN_MENU_DRAWER,
  CLOSE_MENU_DRAWER
} from "../actions/types";

const initialState = {
  profile: {},
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case OPEN_MENU_DRAWER:
      return {
        ...state,
        menuOpen: true
      };
    case CLOSE_MENU_DRAWER:
      return {
        ...state,
        menuOpen: false
      };
    case RESET_PROFILE:
      return initialState;
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
