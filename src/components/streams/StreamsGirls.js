import React from "react";
import StreamCard from "./StreamCard";
import requireAuth from "components/requireAuth";

class StreamsGirls extends React.Component {
  renderList() {
    const girls = [
      "gabi",
      "thaiga",
      "nittmv",
      "diovanakoni",
      "lilypichu",
      "xchocobars",
      "kurolily",
      "itssky",
      "chloelock",
      "nickitaylor",
      "scr3amqueen",
      "gtbae",
      "fuslie",
      "igumdrop",
      "cxlibri",
      "sxywu",
      "nerites",
      "sasa",
      "Emiru",
      "Alliestrasza",
      "kandyland",
      "lilchiipmunk",
      "quarterjade",
      "staryuuki"
    ];
    return girls.map(girl => {
      return <StreamCard channel={girl} />;
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
export default requireAuth(StreamsGirls);
