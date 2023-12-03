import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      Toggle: false
    };
  }

  numberNext = () => {
    if (this.state.Toggle) {
    //   this.setState((prevState) => ({
    //     count: prevState.count + 1
    //   }));
        this.setState({count: this.state.count + 1})
    }
  };

  toggle = () => {
    this.setState((prevState) => ({
      Toggle: !prevState.Toggle
    }));
    // this.setState({toggle: !this.state.Toggle})
  };



  

  render() {
    console.log("simple component");
    return (
      <div>
        <h2>Simple Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.toggle}>Set Toggle</button>
        <button onClick={this.numberNext}>Counter</button>

      </div>
    );
  }
}

export default SimpleCounterComponent


// button onClick={this.numberNext?this.numberNext:null}>Counter</button>