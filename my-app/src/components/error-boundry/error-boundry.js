import React, { Component } from "react";
import error from "../../img/6.png";

import "./error-boundry.css";

class Error extends Component {
  state = {
    error: false
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }
  render() {
    if (this.state.error) {
      return (
        <div className="error">
          <img className="planet-image" src={error} />
          <h5>Не працуе</h5>
        </div>
      );
    }
    return this.props.children;
  }
}
export default Error;
