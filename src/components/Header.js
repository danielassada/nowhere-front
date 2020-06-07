import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderStyle.css";
import GoogleAuth from "./auth/GoogleAuth";
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
    } else if (this.props.authenticated) {
      return (
        <div className="right menu">
          <Link className="item" to="/feature">
            Feature
          </Link>
          <Link to="/signout">Sign Out</Link>
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
    authenticated: state.auth.authenticated,
    googleAuth: state.auth.isSignIn
  };
};
export default connect(mapStateToProps)(Header);
