import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import SongDetail from "./SongDetail";

import {BiCloudDrizzle} from "react-icons/bi";

// tOdo: se videos podem influenciar o meu funcionamento interno, posso usar de forma proposital
//a ilusão cracolândia:Alok -> sobriedade
//? -> curiosidade, tranquilidade
class Content extends React.Component {
  state = {
    songs : [{
      
      music: 'Самая',
      duration: '4:51',
      author: 'MiyaGI feat:Amigo',
      icon:<BiCloudDrizzle/>
      

    },{
      
      music: 'Люби меня',
      duration: '5:19',
      author: 'MiyaGI feat:Симптом',
      icon:<BiCloudDrizzle/>

    }]
  };
    
  componentDidMount() {
    this.props.getSongs(() => {
      console.log("received");
    });
  }


  renderContent() {
  
      return this.state.songs.map((song, i) => {
        
        return (
          <div
            key={i}
            className={`ui blue button `}
            onClick={() => this.props.selectSong(song)}
          >
            {song.music}{song.icon}
          </div>
        );
      });
    
    return <div>Loading...</div>;
  }
  render() {
    return (
      <div className="content">
       
        <div className="songs">{this.renderContent()}</div>
        
        <SongDetail />
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    songs: state.song.songs
  };
};
export default connect(
  mapStatetoProps,
  actions
)(Content);
