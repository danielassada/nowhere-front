import { ADD_SEARCH, GET_SEARCHS } from "../actions/types";

const INITIAL_STATE = {
  errorMessage: "",
  genericResponse: "",
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...state, genericResponse: action.payload };
    case GET_SEARCHS:
      return { ...state, terms: action.payload.terms };
    

    default:
      return state;
  }
}
