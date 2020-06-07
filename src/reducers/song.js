import { ADD_SONG, GET_SONGS } from "../actions/types";

const INITIAL_STATE = {
  errorMessage: "",
  genericResponse: "",
  selectedSong: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_SONG:
      return { ...state, genericResponse: action.payload };
    case GET_SONGS:
      return { ...state, songs: action.payload };
    case "SONG_SELECTED":
      return { ...state, selectedSong: action.payload };

    default:
      return state;
  }
}
