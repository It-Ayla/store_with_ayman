import React, { Component } from 'react';
import CardGrid from "./components/CardGrid"
import Checkers from './components/checkers';
class App extends Component {

  render() {
    return (
      <div className="">

        <CardGrid />
        <Checkers />
      </div>
    );
  }
}

export default App;
