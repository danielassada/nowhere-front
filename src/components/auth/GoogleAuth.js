import React from "react";
import { connect } from "react-redux";
import { googleSignIn, signOutGoogle } from "../../actions";


class GoogleAuth extends React.Component {
componentDidUpdate(){
  //get updated data from user
  //auth.onAuthStateChanged(function(user) {});
}
  renderAuthButton() {
    
    if (this.props.auth.userId) {
      return (
        <button onClick={this.props.signOutGoogle} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.props.googleSignIn} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(
  mapStateToProps,
  { googleSignIn, signOutGoogle }
)(GoogleAuth);
