import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const api={
  key:"c7f308fef68d30d8c65cd151b1120348",
  base:"https://samples.openweathermap.org/data/2.5/"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <input className="search" placeholder="Search" type="text"></input>
        </main>
      </div>
    );
  }
}

export default App;
