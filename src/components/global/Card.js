import React from 'react';

import "./Card.scss";

class Card extends React.Component{
    componentDidMount(){

        
    }

    render( ){
    return(
      <div className="article">
        <div>
        <div className="img-container">
          <img src={this.props.article.urlToImage} alt={`notice-img-${this.props.article.title.slice(0, 10)}`} />
        </div>
        <h3>{this.props.article.title}</h3>

        </div>
          <p>description: {this.props.article.description}</p>
          <a href={this.props.article.url}>Source {this.props.article.source.name}</a>
      </div>
      
    );
  }
}
export default Card;