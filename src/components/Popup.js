import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "components/popupStyle.scss";
class Popup extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className="dimmer">
        <div onClick={e => e.stopPropagation()} className="ui segment">
          <Link to="/global">
            <i className="red x icon" />
          </Link>
          <h2>{this.props.title}</h2>
          <div className="popup">{this.props.children}</div>
          <div className="actions">{this.props.actions}</div>
        </div>
      </div>,
      document.querySelector("#popup")
    );
  }
}

export default Popup;
