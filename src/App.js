import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Skeleton from './skeleton/Skeleton';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Goku vs Vegeta</h1>
        </header>
        <Skeleton />
      </div>
    );
  }
}

export default App;
