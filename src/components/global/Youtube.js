import React from "react";
import axios from "axios";

import Popup from "components/Popup";
import "./youtubeStyle.css";

class Youtube extends React.Component {
  state = { trends: [] };
  componentDidMount() {
    console.log(this.props.match.params);
    const { rc } = this.props.match.params;
    const callApi = async regionCode => {
      console.log(regionCode);
      try {
        const apiKey = "AIzaSyDEBo3OY_FdzJEotJP-GBVoKNkk1V8Y4JA";
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&alt=json&chart=mostPopular&regionCode=${regionCode}&maxResults=25&key=${apiKey}`
        );
        console.log(response);
        this.setState({ trends: response.data.items });
      } catch (error) {
        console.log(error);
      }
    };
    callApi(rc);
  }
  renderContent() {
    return (
      <div className="youtube">
        {this.state.trends.map(trend => {
          return (
            <div className="item" key={trend.id}>
              <h2>{trend.snippet.title}</h2>
              <iframe
                width="250"
                height="175"
                title={trend.id}
                src={`http://www.youtube.com/embed/${trend.id}`}
                frameBorder="1"
                allowFullScreen
                style={{ border: "4px solid #cc0066" }}
              />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <Popup title="" actions="">
        {this.renderContent()}
      </Popup>
    );
  }
}

export default Youtube;
