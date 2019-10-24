import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";
import "./Counter.css";

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  }; // dispatch function and the reducer type is also passed in as props!!!

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    console.log(this.props); // this is the object returned from mapStateToProps!!!
    console.log(this.props.dispatch);
    return (
      <div className="counter-container">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.reset} className="reset-btn">
          Reset
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  // abstraction for this.props.dispatch
  increment,
  decrement,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
