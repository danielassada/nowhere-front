import React from "react";
import "./cebola.css";
import requireAuth from "components/requireAuth";

function Cebola() {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="flex-item">
          <h4>http://uj3wazyk5u4hnvtk.onion/</h4>
          <p>piratebay--- working one 2018</p>
        </div>
        <div className="flex-item">
          <h4>http://lsuzvpko6w6hzpnn.onion/</h4>
          <p>kickass onion</p>
        </div>

        <div className="flex-item">
          <h4>http://xfmro77i3lixucja.onion/</h4>
          <p>imperial library</p>
        </div>
        <div className="flex-item">
          <h4>http://dirnxxdraygbifgc.onion/</h4>
          <p>diretory</p>
        </div>
      </div>
      <div className="row">
        <div className="flex-item">
          <h4>http://jh32yv5zgayyyts3.onion</h4>
          <p>another hidden wiki</p>
        </div>
        <div className="flex-item">
          <h4>http://wiki5kauuihowqi5.onion</h4>
          <p>another hidden wiki</p>
        </div>
        <div className="flex-item">
          <h4>http://underdj5ziov3ic7.onion/</h4>
          <p>diretory</p>
        </div>
        <div className="flex-item">
          <h4>http://wuvdsbmbwyjzsgei.onion</h4>
          <p>LOSSLESS</p>
        </div>
      </div>
    </div>
  );
}
export default requireAuth(Cebola);
