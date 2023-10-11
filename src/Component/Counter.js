import React, { Component } from 'react'

export default class Counter extends Component {
 
    state = {
        num: 0,
    }

    render() {
    return (
      <>
        <h1>Counts: {this.state.num}</h1>
        <button className='btn btn-success' onClick={this.increment}>+</button>
        <button className='btn btn-primary' onClick={this.dencrement}>-</button>
        <button className='btn btn-danger' onClick={this.reset}>Reset</button>
      </>
    )
  }
  increment = ()=> {
    this.setState({num:++this.state.num})
  }
  dencrement = ()=> {
    if (this.state.num > 0)
    this.setState({num:--this.state.num})
  }
  reset = ()=> {
    this.setState({num:0})
  }
}
