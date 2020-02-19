import React from "react";

import "./starship-view.css";

const PersonView = ({ starship }) => {
  const { id, name, model, length, cost } = starship;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Model</span>
            <span>{model}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Length</span>
            <span>{length}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Cost</span>
            <span>{cost}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PersonView;
