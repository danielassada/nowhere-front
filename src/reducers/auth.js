import {
  AUTH_USER,
  AUTH_ERROR,
  SIGN_IN,
  SIGN_OUT
} from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
  genericResponse: "",
  isSignedIn: false,
  userId: null,
  contentKey: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case SIGN_IN:
      return { ...state, userId: action.payload, isSignIn: true };
    case SIGN_OUT:
      return {
        ...state,
        authenticated: "",
        isSignIn: false,
        userId: null
      };
    
    default:
      return state;
  }
}
