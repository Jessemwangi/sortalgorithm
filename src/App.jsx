
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  state = {

    unsortedArray: [],
    inputValue: '',
    sortedArray: '',
  }
  ReadArray = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value.split(',')
    })
  }

  formatArray = () => {
    if (this.state.unsortedArray.map(Number).includes(NaN)) {
      return this.state.unsortedArray
    }
    else {
      return this.state.unsortedArray.map(Number)
    }
  }

  StartSorting = (e) => {

    let unsort = this.formatArray();
    for (let i = 0; i < unsort.length; i++) {
      let lowest = i
      for (let j = i + 1; j < unsort.length; j++) {
        if (unsort[j] < unsort[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        [unsort[i], unsort[lowest]] = [unsort[lowest], unsort[i]];
      }
    }

    e.preventDefault();
    this.setState({
      sortedArray: 'sorted hurray :  : : ' + unsort
    });

  }
  render() {
    return (
      <div className='App'>
        <h1> enter value separated by commer to sort</h1>
        <form action="">
          <div className='main'>
            <label htmlFor="values">enter values</label>
            <input type="text" name="unsortedArray" id="values" onChange={this.ReadArray} />
          </div>
          <div>
            <button type='submit' onClick={this.StartSorting}> sort data</button>
          </div>
          <div className='sortedArray'>
            <p><b> {this.state.sortedArray}</b></p>
          </div>
        </form>
      </div>
    );
  }
}

export default App;




