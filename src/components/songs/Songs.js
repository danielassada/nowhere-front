import React from "react";
import Content from "./Content";
import SongForm from "./SongForm";
import "./songsStyle.css";

class Songs extends React.Component {
  render() {
    return (
      <div>
        <Content />
        <SongForm />
      </div>
    );
  }
}
export default Songs;
