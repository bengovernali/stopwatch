import React, { Component } from 'react';
import './App.css';
import ElapsedTime from './elapsed-time.js';
import Start from './start.js';
import Stop from './stop.js';
import Reset from './reset.js';


class App extends Component {
  state = { time: 0, run: false };
  
  counter = 0;

  updateTime() {
    const newTime = this.state.time + 1;
    this.setState(() => {
      return {time: newTime, run: true};
    })
  }
  
  start() {
    if (!this.state.run) {
      this.counter = setInterval(() => {
        this.updateTime()}, 1000);
      return this.counter;
    }
  }

  stop() {
    clearInterval(this.counter);
    this.setState(() => {
      return {run: false}
    })
  }

  reset() {
    this.stop();
    this.setState(() => {
      return {time: 0, run: false};
    })
  }
  
  render() {
    return (
      <div className="App">
        <ElapsedTime time={this.state.time} />
        <Start start={() => this.start()} />
        <Stop stop={() => this.stop()} />
        <Reset reset={() => this.reset()} />
      </div>
    )
  };
}

export default App;
