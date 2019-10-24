import React from "react";
import "./buttons.css";

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.class} onClick={this.props.function}>
        {this.props.operation}
      </button>
    );
  }
}

export default Button;
