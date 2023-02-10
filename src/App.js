import React from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  render() {
    console.log(
      axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7c2fcdcce922e2e1173d4a9f734b7a05"
      )
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
