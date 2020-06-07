import React from "react";
import "./globalStyle.css";

import Cell from "./Cell";

class Global extends React.Component {
  render() {
    return (
      <div id="global-container">
        <Cell code="ca" name="canada" lat="45.376296" long="-75.651582" />
        <Cell code="us" name="usa" lat="47" long="-119" />
        <Cell code="gb" name="greatbritain" lat="51.337942" long="-0.123106" />
        <Cell code="au" name="australia" lat="-35.282315" long="149.127835" />
        <Cell code="nz" name="newzealand" lat="-43.409866" long="172.346937" />
        <Cell code="ie" name="ireland" lat="53.072937" long="-7.735628" />
        <Cell code="jm" name="jamaica" lat="51.337942" long="-0.123106" />
        <Cell code="in" name="india" lat="28.440320" long="77.299390" />
        <Cell code="br" name="brazil" lat="-15.802906" long="-47.883963" />
        <Cell code="pt" name="portugal" lat="38.882551" long="-8.804971" />
        <Cell code="fr" name="france" lat="48.781141" long="2.404505" />
        <Cell code="it" name="itali" lat="41.888427" long="12.525105" />
        <Cell code="ru" name="russia" lat="55.716299" long="37.291385" />
        <Cell code="jp" name="japan" lat="35.734549" long="139.294001" />
      </div>
    );
  }
}

export default Global;
