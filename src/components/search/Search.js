import React from "react";

import SearchForm from "./SearchForm";
import Terms from "components/search/Terms";

class Search extends React.Component {
  render() {
    return (
      <div>
        <Terms />
        <SearchForm />
      </div>
    );
  }
}

export default Search;
