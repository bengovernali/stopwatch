import React, { Component } from 'react';
import './App.css';
import ElapsedTime from './elapsed-time.js';
import Start from './start.js';
import Stop from './stop.js';

class App extends Component {
  state = { counter: 0, run: false };
  
  start() {
    const startTime = new Date();
    this.setState(() => {
      return {run: true };
    });
    while (this.state.run === true) {
      let time = (new Date()) - startTime;
      console.log(time);
      this.props.time = time;
      this.setState(() => {
        return {counter: time};
      });
    }
  }

  stop() {
    this.setState(() => {
      return {run: false};
    });
  }
  
  render() {
    return (
      <div className="App">
        <ElapsedTime />
        <Start />
        <Stop />
      </div>
    )
  };
}

export default App;
