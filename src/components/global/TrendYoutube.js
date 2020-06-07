import React from "react";
import axios from "axios";

import youtube from "./src/youtube.png";

class TrendYoutube extends React.Component {
  state = { latitude: 45.376296, longitude: -75.651582, el: null };
  async searchTrend(regionCode) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&alt=json&chart=mostPopular&regionCode=${regionCode}&maxResults=25&key=AIzaSyDEBo3OY_FdzJEotJP-GBVoKNkk1V8Y4JA`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <img
        src={youtube}
        onClick={() => this.searchTrend("ca")}
        className="api_icon youtube"
        alt="icon_youtube"
      />
    );
  }
}

export default TrendYoutube;
