import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "components/HeaderStyle.css";
import GoogleAuth from "components/auth/GoogleAuth";

class Header extends React.Component {

  renderLinks() {
    if (this.props.googleAuth) {
      return (
        <div className="right menu">
          <Link className="item" to="/feature">
            Feature
          </Link>
          <GoogleAuth />
        </div>
      );
    } else {
      return (
        <div className="right menu">
          
          <Link className="item" to="/signup">
            Sign up
          </Link>
          <Link className="item" to="/signin">
            Sign in
          </Link>
          <GoogleAuth />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link className="item" to="/">
          Home
        </Link>
        {this.renderLinks()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    googleAuth: (state.auth===true)
  };
};
export default connect(mapStateToProps,null)(Header);

