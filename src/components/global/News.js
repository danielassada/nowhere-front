import React from "react";
import axios from "axios";
import Popup from "components/Popup";

import "./newsStyle.scss";
import Card from "./Card";

class News extends React.Component {
  state = { articles: [] };
  componentDidMount() {
    console.log(this.props.match.params);
    const { rc } = this.props.match.params;
    const callApi = async regionCode => {
      console.log(regionCode);
      try {
        const apiKey = "883726e427a541609ad6a7e2dc25b971";
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${regionCode}&apiKey=${apiKey}`
        );
        console.log(response);
        this.setState({ articles: response.data.articles });
      } catch (error) {
        console.log(error);
      }
    };
    callApi(rc);
  }
  renderContent() {
    if (this.state.articles) {
      return this.state.articles.map((article, i) => {
        return (
              <Card article={article} key={i}/>
        );
      });
    }
    return null;
  }

  render() {
    return (
      <Popup title="" actions="">
        {this.renderContent()}
      </Popup>
    );
  }
}

export default News;
