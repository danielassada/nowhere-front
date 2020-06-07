import {
    ADD_LINK,
    GET_LINKS
  } from "../actions/types";
  

  const INITIAL_STATE = {
    errorMessage: "",
    genericResponse: "",
  };
  
  export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      
      case ADD_LINK:
        return { ...state, genericResponse: action.payload };
      case GET_LINKS:
        return { ...state, links: action.payload };
      default:
        return state;
    }
  }
  