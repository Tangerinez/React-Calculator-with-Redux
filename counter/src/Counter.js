import React from "react";
import { connect } from "react-redux";
import "./Counter.css";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  }; // dispatch function and the reducer type is also passed in as props!!!

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    console.log(this.props); // this is the object returned from mapStateToProps!!!
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

export default connect(mapStateToProps)(Counter);
