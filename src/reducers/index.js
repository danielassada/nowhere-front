import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import song from "./song";
import search from "./search";
import links from "./links";

export default combineReducers({
  song: song,
  links:links,
  auth: auth,
  form: formReducer,
  search: search
});
