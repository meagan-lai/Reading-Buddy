import React, { Component } from "react";
import Say from "react-say";

class Definition extends Component {
  state = {
    say: false
  };
  render() {
    return (
      <div>
        {this.props.word}
        {this.state.say ? <Say speak={this.props.word} /> : null}
      </div>
    );
  }
}

export default Definition;
