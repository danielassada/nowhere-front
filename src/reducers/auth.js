import {
  AUTH_USER,
  AUTH_ERROR,
  SIGN_IN,
  SIGN_OUT
} from "../actions/types";

const INITIAL_STATE = {
  userName: "",
  errorMessage: "",
  genericResponse: "",
  isSignedIn: false,
  userId: undefined,
  contentKey: undefined
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isSignedIn: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case SIGN_IN:
      return { ...state, userId: action.payload.user.uid, userName: action.payload.user.displayName, isSignIn: true };
    case SIGN_OUT:
      return {
        ...state,
        isSignIn: false,
        userName:'',
        userId: undefined
      };
  
    default:
      return state;
  }
}
