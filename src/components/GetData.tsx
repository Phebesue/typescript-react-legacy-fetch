import React, { Component } from "react";
import Display from "./Display";

type AcceptedProps = {};

type GetLocState = {
  long: number;
  lat: number;
  temp: number;
  
};

export default class Weather extends Component<AcceptedProps, GetLocState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      long: 0,
      lat: 0,
      temp: 0,
    };
  }

  componentDidMount() {
    this.fetchLocation();
    this.getWeather();
    console.log("Mounted" + "");
  }
  fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(
          `Position: ${position.coords.longitude}, ${position.coords.latitude}`
        );

        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        });
      });
    } else {
      return "Geolocation is not supported by this browser.";
    }
  };


  getWeather = () => {
    const key: string = "cf75496071ae04ae3e523b4fc4d4bdde";
    let url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&units=imperial&appid=${key}`;

    fetch(url)
      .then((value) => {
        return value.json();
      })
      .then((json) => {
        this.setState({
          temp: json.main.temp,
        });
        console.log(json);
      })
      .catch(console.log);
    console.log(url);
  };

  render() {
    return (
      <div className="OpenWeather">
        <div className="weatherDiv">
          <h1>Weather Condition</h1>

          <h3>Long: {this.state.long} <br />
          Lat: {this.state.lat} </h3>

          <Display temp={this.state.temp}/>
        </div>
      </div>
    );
  }
}
