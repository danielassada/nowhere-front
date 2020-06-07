import React from "react";
import StreamCard from "./StreamCard";

class Streams extends React.Component {
  renderList() {
    const streams = [
      "gratis150ml",
      "stephen_wolfram",
      "hardlydifficult",
      "adam13531",
      "noopkat",
      "rw_grim",
      "patopapao",
      "daniels",
      "thehydrogen",
      "gamesdonequick",
      "fedmyster",
      "scarra",
      "doublelift",
      "grimmmz",
      "disguisedtoasths"
    ];
    return streams.map(stream => {
      return <StreamCard channel={stream} />;
    });
  }
  render() {
    return (
      <div className="streamsList">
        <h2>Streams</h2>
        {this.renderList()}
      </div>
    );
  }
}
export default Streams;
