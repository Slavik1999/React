import React, { Component } from "react";
import error from "../../img/6.png";

import "./error-network.css";

const Error = () => {
  return (
    <div className="error">
      <img className="planet-image" src={error} />
      <h5>Не працуе сервер</h5>
    </div>
  );
};
export default Error;
