import React, { Component } from 'react';
import './App.css';
import ElapsedTime from './elapsed-time.js';
import Start from './start.js';
import Stop from './stop.js';
import Reset from './reset.js';


class App extends Component {
  state = { time: 0 };
  
  counter = 0;

  updateTime() {
    const newTime = this.state.time + 1;
    this.setState(() => {
      return {time: newTime};
    })
  }
  
  start() {
    this.counter = setInterval(() => {
      this.updateTime()}, 1000);
    return this.counter;
  };

  stop() {
    clearInterval(this.counter)
  }

  reset() {
    this.stop();
    this.setState(() => {
      return {time: 0};
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
