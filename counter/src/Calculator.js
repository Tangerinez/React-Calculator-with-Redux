import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  divide,
  expression,
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

  expression = () => {
    this.props.expression();
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
          operation="x2"
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
        <div className="row">
          <Button operation="1" />
          <Button operation="2" />
          <Button operation="3" />
        </div>
        <div className="row">
          <Button operation="4" />
          <Button operation="5" />
          <Button operation="6" />
        </div>
        <div className="row">
          <Button operation="7" />
          <Button operation="8" />
          <Button operation="9" />
        </div>
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
  expression,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
