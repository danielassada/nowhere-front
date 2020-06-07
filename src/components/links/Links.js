import React from "react";

import LinksForm from "./LinksForm";
import Container from "components/links/Container";

class Links extends React.Component {
  render() {
    return (
      <div>
        <Container />
        <LinksForm />
      </div>
    );
  }
}

export default Links;
