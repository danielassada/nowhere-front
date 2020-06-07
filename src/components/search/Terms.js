import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import './search.css'


class Terms extends React.Component {
  componentDidMount() {
    console.log(this.props.terms);

    this.props.getSearchs(() => {
      console.log("received");
    });
  }
  componentDidUpdate() {
    console.log(this.props.terms);
  }
  render() {
    if (this.props.terms) {
      return this.props.terms.map((term, i) => {
        return (
          <div className="card">
            <a href={`https://www.google.com/search?q=${term.term}`}>{term.term}</a>
            <span>{term.description}</span>
            <span className="robotic">{term.date}</span>
          </div>
        );
      });
    }
    return <div>Loading...</div>;
  }
}


const mapStatetoProps = state => {
  return {
    terms: state.search.terms
  };
};
export default connect(
  mapStatetoProps,
  actions
)(Terms);
