import React, { Component } from "react";

class Btn extends Component {
  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ renderError: true });
          }}
        >
          ThrowError
        </button>
      </div>
    );
  }
}

export default Btn;
