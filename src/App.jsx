
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  state ={
    
    unsortedArray:[],
    inputValue:'',
    sortedArray:'',
  }
  ReadArray = (e) =>{
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value.split(','),
    })
    console.log(this.state.unsortedArray);
  }

  StartSorting = (e) =>{
    for (let i = 0; i < this.state.unsortedArray.length; i++) {
      let lowest = i
      for (let j = i + 1; j < this.state.unsortedArray.length; j++) {
        if (this.state.unsortedArray[j] < this.state.unsortedArray[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[this.state.unsortedArray[i], this.state.unsortedArray[lowest]] = [this.state.unsortedArray[lowest], this.state.unsortedArray[i]]
      }
    }
    
    e.preventDefault();
    this.setState({
      sortedArray:'sorted hurray' + this.state.unsortedArray
    });
    console.log(this.state.unsortedArray);
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
        <p>{this.state.unsortedArray}</p>
      </div>
      </form>
      </div>
    );
  }
}

export default App;




