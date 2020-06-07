import React from "react";
import { Link } from "react-router-dom";
import requireAuth from "./requireAuth";

class Feature extends React.Component {
  render() {
    return (
      <div>
        <Link className="ui blue button" to="/slrig">
          Girls streaming
        </Link>
        <Link className="ui blue button" to="/cebola">
          Cebola
        </Link>
      </div>
    );
  }
}
export default requireAuth(Feature);
