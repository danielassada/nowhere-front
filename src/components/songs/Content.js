import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import SongDetail from "./SongDetail";

class Content extends React.Component {
  state = {
    hideRelax: "",
    hideExciting: "",
    hidePositive: "",
    hideNegative: "",
    hideOldButGold: ""
  };

  componentDidMount() {
    this.props.getSongs(() => {
      console.log("received");
    });
  }

  toggleClass(css) {
    switch (css) {
      case "relax":
        let relax = this.state.hideRelax === "" ? "hidden " : "";
        this.setState({ hideRelax: relax });
        break;
      case "exciting":
        let exciting = this.state.hideExciting === "" ? "hidden " : "";
        this.setState({ hideExciting: exciting });
        break;
      case "positive":
        let positive = this.state.hidePositive === "" ? "hidden " : "";
        this.setState({ hidePositive: positive });
        break;
      case "negative":
        let negative = this.state.hideNegative === "" ? "hidden " : "";
        this.setState({ hideNegative: negative });
        break;
      case "old_but_gold":
        let old_but_gold = this.state.hideOldButGold === "" ? "hidden " : "";
        this.setState({ hideOldButGold: old_but_gold });
        break;
      default:
        break;
    }
  }
  renderContent() {
    if (this.props.songs) {
      return this.props.songs.songs.map((song, i) => {
        const relax = song.relax === false ? "relax " : this.state.hideRelax;
        const exciting =
          song.exciting === false ? "exciting " : this.state.hideExciting;
        const positive =
          song.positive === false ? "negative " : this.state.hidePositive;
        const negative =
          song.negative === false ? "positive " : this.state.hideNegative;
        const old_but_gold =
          song.old_but_gold === false
            ? "old_but_gold "
            : this.state.hideOldButGold;
        const tags = relax + exciting + positive + negative + old_but_gold;
        return (
          <div
            key={i}
            className={`ui red button ${tags}`}
            onClick={() => this.props.selectSong(song)}
          >
            {song.music}
          </div>
        );
      });
    }
    return <div>Loading...</div>;
  }
  render() {
    return (
      <div className="content">
        <div className="sideBar">
          <i
            className={`
          ${this.state.hideRelax === "hidden " ? "eye slash" : "eye"}
           icon`}
          />
          <button
            className="ui blue button"
            onClick={() => this.toggleClass("relax")}
          >
            relax
          </button>
          <i
            className={`
          ${this.state.hideExciting === "hidden " ? "eye slash" : "eye"}
           icon`}
          />
          <button
            className="ui blue button"
            onClick={() => this.toggleClass("exciting")}
          >
            exciting
          </button>
          <i
            className={`
          ${this.state.hidePositive === "hidden " ? "eye slash" : "eye"}
           icon`}
          />
          <button
            className="ui blue button"
            onClick={() => this.toggleClass("positive")}
          >
            positive
          </button>
          <i
            className={`
          ${this.state.hideNegative === "hidden " ? "eye slash" : "eye"}
           icon`}
          />
          <button
            className="ui blue button"
            onClick={() => this.toggleClass("negative")}
          >
            negative
          </button>
          <i
            className={`
          ${this.state.hideOldButGold === "hidden " ? "eye slash" : "eye"}
           icon`}
          />
          <button
            className="ui blue button"
            onClick={() => this.toggleClass("old_but_gold")}
          >
            old but gold
          </button>
        </div>
        <div className="songs">{this.renderContent()}</div>
        <SongDetail />
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    songs: state.song.songs
  };
};
export default connect(
  mapStatetoProps,
  actions
)(Content);
