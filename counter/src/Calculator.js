import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  divide,
  reset
} from "./redux-js/actions";
import Button from "./components/buttons";
import "./Calculator.css";

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  }; // dispatch function and the reducer type is also passed in as props!!!

  decrement = () => {
    this.props.decrement();
  };

  multiplyByTwo = () => {
    this.props.multiply();
  };

  divideByTwo = () => {
    this.props.divide();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    console.log(this.props); // this is the object returned from mapStateToProps!!!
    return (
      <div className="counter-container">
        <h2>Counter</h2>
        <Button
          operation="x"
          function={this.multiplyByTwo}
          class="multiply-btn"
        />
        <div>
          <Button
            operation="-"
            function={this.decrement}
            class="decrement-btn"
          />
          <span className="count">{this.props.count}</span>
          <Button
            operation="+"
            function={this.increment}
            class="increment-btn"
          />
        </div>
        <Button operation="/2" function={this.divideByTwo} class="divide-btn" />
        <Button operation="Reset" function={this.reset} class="reset-btn" />
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
  multiply,
  divide,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
