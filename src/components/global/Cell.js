import React from "react";
import { Flag, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import newspaper from "./src/newspaper.png";
import weather from "./src/weather.png";
import youtube from "./src/youtube.png";

class Cell extends React.Component {
  render() {
    return (
      <Segment>
        <Flag name={this.props.code} />
        <div id={`fuso_${this.props.code}`} />
        <h5>{this.props.name}</h5>
        <div className="row">
          <Link to={`/global/news/${this.props.code}`}>
            <img src={newspaper} className="api_icon" alt="newspaper" />
          </Link>

          <Link to={`/global/youtube/${this.props.code}`}>
            <img src={youtube} className="api_icon" alt="icon_youtube" />
          </Link>
          <Link to={`/global/weather/${this.props.lat}/${this.props.long}`}>
            <img className="api_icon" src={weather} alt="weather_icon" />
          </Link>
        </div>
      </Segment>
    );
  }
}

export default Cell;
