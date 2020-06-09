import React from "react";
import axios from "axios";
import "./streamStyle.css";

class StreamCard extends React.Component {
  state = { response: {} };

  restRequest = async url => {
    try {
      let request = await axios.get(url);
      return request;
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    const callApi = async channel => {
      const url = `https://api.twitch.tv/kraken/streams/${channel}?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm`;
      try {
        const response = await axios.get(url);
        console.log(response);

        this.setState({
          response: response.data
        });
      } catch (error) {
        console.log(error);
      }
    };
    callApi(this.props.channel);
  }
  renderContent() {
    console.log(this.state.response);
    if (this.state.response.stream) {
      return (
        <a className="online" href={this.state.response.stream.channel.url}>
          <img className="logo" alt="logo-channel"src={this.state.response.stream.channel.logo} />
          <div className="desc">
            <h2>{this.state.response.stream.channel.display_name}</h2>
            <br />
            <p>
              Game: {this.state.response.stream.game} with{" "}
              {this.state.response.stream.viewers.toString()} - viewers
              <br />
              and delay of: {this.state.response.stream.delay.toString()} {"  "}
              stream_type:
              {this.state.response.stream.stream_type}
              <br />
              started in: {this.state.response.stream.created_at}
            </p>
            <h3>Title: {this.state.response.stream.channel.status}</h3>
          </div>
        </a>
      );
    }
    /*  const url = `https://api.twitch.tv/kraken/channels/${
      this.props.channel
    }?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm`;
    const response = this.restRequest(url);
    console.log(response);
    return (
      <a className="offline" href={response.url}>
        <img className="logo" src={response.logo} />
        <h3>{response.display_name}</h3>
      </a>
    ); */
    return null;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default StreamCard;
