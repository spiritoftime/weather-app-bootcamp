import React from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", temperature: 0, fetched: false };
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
            temperature: res.data.main.temp,
            fetched: true,
          };
        });
      });
  };
  onChangeHandler(e) {
    this.setState({ inputValue: e.target.value, fetched: false });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.clickHandler}>
            <label>
              Please type in a city to see its weather data:
              <input
                className="input"
                value={this.state.inputValue}
                onChange={this.onChangeHandler}
              ></input>
              <button type="submit">Submit</button>
            </label>
          </form>
          {this.state.fetched ? (
            <p>
              the current temperature in {this.state.inputValue} is{" "}
              {(this.state.temperature - 273).toFixed(1)} degree celsius.
            </p>
          ) : (
            ""
          )}
        </header>
      </div>
    );
  }
}

export default App;
