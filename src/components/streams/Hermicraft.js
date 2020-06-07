import React from "react";
import StreamCard from "./StreamCard";
import MixerCard from "./MixerCard";

class Streams extends React.Component {
  renderList() {
    const streams = [
      "Welsknight",
      "GoodTimesWithScar",
      "rendogtv",
      "iskall85",
      "cubfan135",
      "docm77LIVE",
      "EthoTV",
      "zueljin",
      "ZombieCleo",
      "Xisuma",
      "xBCrafted",
      "TopMass",
      "Tinfoilchef",
      "TangoTek",
      "Sl1pg8r",
      "ThatMumboJumbo",
      "Monkeyfarm",
      "KingDaddyDMAC",
      "Keralis",
      "Joehills",
      "iJevin",
      "Jessassin",
      "impulseSV",
      "hypnotizd",
      "falsesymmetry",
      "Biffa2001",
      "PythonGB",
      "stressmonster"
    ];
    return streams.map(stream => {
      return <StreamCard channel={stream} />;
    });
  }
  renderMixer() {
    const mixers = ["TangoTek", "impulseSV"];
    return mixers.map(mixerUser => {
      return <MixerCard channel={mixerUser} />;
    });
  }
  render() {
    return (
      <div className="streamsList">
        <h2>Streams</h2>
        {this.renderList()}
        {this.renderMixer()}
      </div>
    );
  }
}
export default Streams;
