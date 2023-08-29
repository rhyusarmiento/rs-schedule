import React, { Component } from 'react';
import Libary from './library/library';
import Schedule from './schedule/schedule';

class App extends Component {
  render() {
    return (
      <div className="home">
        <Libary />
        <Schedule />
      </div>
    );
  }
}

export default App;