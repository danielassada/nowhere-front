import axios from "axios";
import {
  AUTH_USER,
  AUTH_ERROR,
  SIGN_IN,
  SIGN_OUT,
  ADD_LINK,
  GET_LINKS,
  ADD_SONG,
  GET_SONGS,
  ADD_SEARCH,
  GET_SEARCHS
} from "./types";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};
export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const googleSignIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: SIGN_OUT
  };
};

export const addLink = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/addlink",
      formProps
    );
    dispatch({ type: ADD_LINK, payload: response.data.message });
    callback();
  } catch (error) {
    dispatch({ type: ADD_LINK, payload: "Couldn't be sended" });
  }
};

export const getLinks = callback => async dispatch => {
  try {
    const response = await axios.get("http://localhost:3090/getlinks");
    dispatch({ type: GET_LINKS, payload: response.data });
    callback();
  } catch (error) {
    dispatch({ type: GET_LINKS, payload: "error" });
  }
};

export const addMusic = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/addsong",
      formProps
    );
    dispatch({ type: ADD_SONG, payload: response });
    callback();
  } catch (error) {
    dispatch({ type: ADD_LINK, payload: "Couldn't be sended" });
  }
};
export const getSongs = callback => async dispatch => {
  try {
    const response = await axios.get("http://localhost:3090/getsongs");
    dispatch({ type: GET_SONGS, payload: response.data });
    callback();
  } catch (error) {
    dispatch({ type: GET_SONGS, payload: "error" });
  }
};
export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
export const addSearch = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/addsearch",
      formProps
    );
    dispatch({ type: ADD_SEARCH, payload: response });
    callback();
  } catch (error) {
    dispatch({ type: ADD_SEARCH, payload: "Couldn't be sended" });
  }
};
export const getSearchs = callback => async dispatch => {
  try {
    const response = await axios.get("http://localhost:3090/getsearch");
    dispatch({ type: GET_SEARCHS, payload: response.data });
    callback();
  } catch (error) {
    dispatch({ type: GET_SEARCHS, payload: "error" });
  }
};