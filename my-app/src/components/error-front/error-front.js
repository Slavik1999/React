import React, { Component } from "react";
import error from "../../img/spongebob_PNG19.png";

import "./error-front.css";

const Error = () => {
  return (
    <div className="error">
      <img className="planet-image" src={error} />
      <h5>Фронт сдох!</h5>
    </div>
  );
};
export default Error;
