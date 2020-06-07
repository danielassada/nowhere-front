import React from "react";
import { Transition } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "actions";

class SearchForm extends React.Component {
  state = { visible: false, className: "hidden", checked: false };

  toggle = () => this.setState({ checked: !this.state.checked });
  handleVisibility = e => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  };
  onSubmit = formProps => {
    this.props.addSearch(formProps, () => {
      if (this.props.genericResponse && this.state.visible === true) {
        console.log(this.props.genericResponse);

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
    return "Add Term";
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
          <li>You must writte a Term.</li>
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
      <div id="seachForm" className="light-green">
        <button
          id="toggleForm"
          className="ui primary button puller"
          onClick={this.handleVisibility}
        >
          {this.buttonText()}
        </button>
        <Transition.Group animation={animation} duration={duration}>
          {visible && (
            <form
              onSubmit={handleSubmit(this.onSubmit)}
              className="ui form searchForm"
            >
              {this.renderError()}
              <fieldset className="field">
                <label>Term</label>
                <Field
                  id="term"
                  name="term"
                  type="text"
                  component="input"
                  className="ui input"
                />
              </fieldset>
              <fieldset className="field">
                <label>description</label>
                <Field
                  name="description"
                  type="description"
                  component="input"
                  autoComplete="none"
                  className="ui input"
                />
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
  if (state.genericResponse) {
    return { genericResponse: state.genericResponse };
  }
  return { submit: null };
};
export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "addSearchForm" })
)(SearchForm);
