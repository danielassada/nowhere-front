import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import "components/links/containerStyle.css";

class Container extends React.Component {
  componentDidMount() {
    console.log(this);

    this.props.getLinks(() => {
      console.log("received");
    });
  }
  componentDidUpdate() {
    console.log(this);
  }
  genreToColor(genre) {
    let color = "";
    switch (genre) {
      case "anime":
        color = "red";
        break;
      case "nihongo":
        color = "green";
        break;
      case "programming":
        color = "blue";
        break;
      case "series":
        color = "orange";
        break;
      case "other":
        color = "violet";
        break;
      default:
        color = "";
        break;
    }
    return color;
  }

  renderLinks() {
    if (this.props.links) {
      return this.props.links.links
        .sort(function(a, b) {
          if (a.genre > b.genre) {
            return 1;
          }
          if (a.genre < b.genre) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
        .map(link => {
          return (
            <div key={link._id}>
              <span className="description">{link.description}</span>

              <a
                className={`ui inverted ${this.genreToColor(
                  link.genre
                )} button`}
                href={link.link}
              >
                {link.title}
              </a>
            </div>
          );
        });
    }
    return <div>Loading...</div>;
  }
  render() {
    return <div id="links-container">{this.renderLinks()}</div>;
  }
}
const mapStatetoProps = state => {
  return {
    links: state.auth.links
  };
};
export default connect(
  mapStatetoProps,
  actions
)(Container);
