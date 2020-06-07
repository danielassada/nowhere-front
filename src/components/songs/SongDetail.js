import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song.</div>;
  }
  const searchYoutube = music => {
    let win = window.open(
      `https://www.youtube.com/results?search_query=${music}`,
      "_blank"
    );
    win.focus();
  };
  const validateString = (textComplement, textVariable) => {
    if (textVariable) {
      return textComplement + textVariable;
    }
    return null;
  };
  return (
    <div className="songDetail">
      <h3>Details for:</h3>
      <p>
        Title: {song.music} <br />
        {validateString("Duration: ", song.duration)} <br />
        {validateString("Author: ", song.author)}
      </p>
      <button
        className="ui red button"
        onClick={() => searchYoutube(song.music)}
      >
        Search on Youtube
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return { song: state.song.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
