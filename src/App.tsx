import React, { Component } from 'react';
import './App.css';

class App extends Component<{}, { randomNumber: number }> {

  constructor(props: any) {
    super(props);
    this.state =  { randomNumber: 0 };

    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  }

  generateRandomNumber(): void {
    this.setState({
      randomNumber: Math.floor(Math.random() * 100)
    });
  }

  render() {
    return (
      <div className="MicroFrontend2">
        <h1>Micro Frontend 2</h1>
        <div className='RandomNumberContainer'>
          <p>{this.state.randomNumber}</p>
          <button onClick={this.generateRandomNumber}>Generate random number</button>
        </div>
        <p>Number of Micro Frontend 1: XY</p>
      </div>
    );
  }
}

export default App;
