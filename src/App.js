import React from "react";
import logo from "./logo.png";
import "./App.css";
import Graph from "./Graph";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", weatherData: [], fetched: false };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  clickHandler = (e) => {
    e.preventDefault();
    const res = axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=7c2fcdcce922e2e1173d4a9f734b7a05`
      )
      .then((res) => {
        // console.log(res);
        this.setState((prevState) => {
          return {
            inputValue: prevState.inputValue,
            weatherData: [
              ...prevState.weatherData,
              {
                perceived: +(res.data.main.feels_like - 273).toFixed(1),
                actual: +(res.data.main.temp - 273).toFixed(1),
                city: this.state.inputValue,
              },
            ],
            fetched: true,
          };
        });
      });
  };
  onChangeHandler(e) {
    this.setState({ inputValue: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.clickHandler}>
            <label>
              Please type in a city to see its temperature data:
              <input
                className="input"
                value={this.state.inputValue}
                onChange={this.onChangeHandler}
              ></input>
              <button className="btn" type="submit">
                Submit
              </button>
            </label>
          </form>
          {this.state.fetched ? (
            <>
              <p className="additional-info">
                Re-enter city names to fetch their temperature data!
              </p>
              <Graph weatherData={this.state.weatherData} />
            </>
          ) : (
            <div className="graph-div" />
          )}
        </header>
      </div>
    );
  }
}

export default App;
