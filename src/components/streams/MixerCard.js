import React from "react";
import axios from "axios";
import "./streamStyle.css";
const Mixer = require("@mixer/client-node");
class MixerCard extends React.Component {
  state = { response: {} };

  /*   restRequest = async url => {
    try {
      let request = await axios.get(url);
      return request;
    } catch (err) {
      console.log(err);
    }
  }; */

  componentDidMount() {
    const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

    const channelName = "minecraft";

    client.use(
      new Mixer.OAuthProvider(client, {
        clientId: "a7672eec74f20d9f765fd8975b3613f7344cc641543ce51a"
      })
    );

    client
      .request("GET", `channels/${this.props.channel}/details`)
      .then(res => {
        this.setState({
          response: res.body
        });
        const viewers = res.body.viewersTotal;
        console.log(`You have ${viewers} total views...`);
      });

    /*     const callApi = async channel => {
      const url = `https://mixer.com/api/v1/channels/${channel}/details`;
      try {
        const response = await axios.get(url);
        console.log(response);

        this.setState({
          response: response
        });
      } catch (error) {
        console.log(error);
      }
    };
    callApi(this.props.channel); */
  }
  renderContent() {
    console.log(this.state.response);
    if (this.state.response.online) {
      return (
        <a className="online" href={`https://mixer.com/${this.props.channel}`}>
          <img className="logo" src={this.state.response.user.avatarUrl} />
          <div className="desc">
            <h2>{this.state.response.token}</h2>
            <br />
            <p>
              Game: {this.state.response.type.name} with{" "}
              {this.state.response.viewersCurrent.toString()} - viewers
              <br />
              started in: {this.state.response.updateAt}
            </p>
            <h3>Title: {this.state.response.name}</h3>
          </div>
        </a>
      );
    }

    return null;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default MixerCard;
