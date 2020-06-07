import React, { Component } from "react";
import { Transition } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "components/links/linksFormStyle.css";

class LinksForm extends Component {
  state = { visible: false, className: "hidden" };
  componentDidUpdate() {
    console.log(this);
  }
  handleVisibility = e => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  };
  onSubmit = formProps => {
    this.props.addLink(formProps, () => {
      if (
        this.props.genericResponse === "Success" &&
        this.state.visible === true
      ) {
        this.setState({ visible: false });
      } else if (this.props.genericResponse === "Couldn't be sended") {
        this.setState({ className: "visible" });
      }
    });
  };
  buttonText() {
    if (this.state.visible) {
      return "Hide form";
    }
    return "Add link";
  }
  renderError() {
    return (
      <div className={`ui error message ${this.state.className}`}>
        <i
          className="close icon"
          onClick={() => this.setState({ className: "hidden" })}
        />
        <div className="header">{this.state.errorMessage}</div>
        <ul className="list">
          <li>You must writte a title and address.</li>
          <br />
          <li>You must to use valid caracters.</li>
        </ul>
      </div>
    );
  }
  /* what situation I should show error
when genericResponse is different of "" and Sucess
when form was submitted
when close was not been clicked */

  render() {
    const animation = "fly up";
    const visible = this.state.visible;
    const duration = 1100;
    const { handleSubmit } = this.props;

    return (
      <div id="linksForm">
        <button
          className="ui primary button puller"
          onClick={this.handleVisibility}
        >
          {this.buttonText()}
        </button>
        <Transition.Group animation={animation} duration={duration}>
          {visible && (
            <form onSubmit={handleSubmit(this.onSubmit)} className="ui form">
              {this.renderError()}
              <fieldset className="field">
                <label>Title </label>
                <Field
                  name="title"
                  type="text"
                  component="input"
                  autoComplete="none"
                  className="ui input"
                />
              </fieldset>

              <fieldset className="field">
                <label>Link </label>
                <Field
                  name="link"
                  type="text"
                  component="input"
                  autoComplete="none"
                  className="ui input"
                />
              </fieldset>
              <fieldset className="field">
                <label>Description </label>
                <Field
                  name="description"
                  type="text"
                  component="textarea"
                  autoComplete="none"
                />
              </fieldset>
              <fieldset className="field">
                <Field name="genre" component="select">
                  <option />
                  <option value="nihongo">nihongo</option>
                  <option value="series">series</option>
                  <option value="anime">anime</option>
                  <option value="programming">programming</option>
                  <option value="other">other</option>
                </Field>
              </fieldset>
              <button
                className="ui primary button centered"
                onClick={() => {
                  if (this.props.genericResponse === "Couldn't be sended") {
                    this.setState({ className: "visible" });
                  }
                }}
              >
                Submit
              </button>
            </form>
          )}
        </Transition.Group>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);

  if (state.auth.genericResponse) {
    return { genericResponse: state.auth.genericResponse };
  }
  return { submit: null };
};
export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "addLinkForm" })
)(LinksForm);
