import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import EnterNumber from './Components/EnterNumber';
import CurrentTotal from './Components/CurrentTotal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberToAppend: "",
    }
  }

  addCurrentTotal = (number) => {
    console.log('in addCT', number);
    this.setState({
      numberToAppend: (0 + parseInt(number.numberToChange)),
    })
    console.log(this.state.numberToAppend);
    
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <EnterNumber addCurrentTotal={this.addCurrentTotal} />
        <CurrentTotal numberToAppend={this.state.numberToAppend} />
      </div>
    );
  }
}

export default App;
