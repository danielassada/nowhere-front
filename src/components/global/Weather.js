import React from "react";
import axios from "axios";

import Popup from "components/Popup";

class Weather extends React.Component {
  state = {
    name: "",
    temp: "",
    pressure: "",
    humidity: "",
    speed: "",
    deg: "",
    main: ""
  };
  componentDidMount() {
    console.log(this.props.match.params);
    const { lat, long } = this.props.match.params;
    const callApi = async (lat, long) => {
      console.log(lat, long);
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=219a5f4286f667b3eeb09e9a5efa7f85`
        );
        console.log(response);

        this.setState({
          name: response.data.name,
          temp: response.data.main.temp,
          pressure: response.data.main.pressure,
          humidity: response.data.main.humidity,
          speed: response.data.wind.speed,
          deg: response.data.wind.deg,
          main: response.data.weather[0].main
        });
      } catch (error) {
        console.log(error);
      }
    };
    callApi(lat, long);
  }

  render() {
    if (this.state.name !== "") {
      return (
        <Popup title={`City: ${this.state.name}`} actions="">
          <h3>{this.state.main}</h3>
          <p>{this.state.temp - 273.15}ºC</p>
          <p>Pressure: {this.state.pressure}kPa</p>
          <p>humidity: {this.state.humidity}%</p>
          <p>wind speed: {this.state.speed}km/h</p>
        </Popup>
      );
    }
    return null;
  }
}

export default Weather;
