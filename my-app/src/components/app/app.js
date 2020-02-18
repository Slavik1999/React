import React from "react";

import Header from "../header";
import RandomPerson from "../random-person";
import PersonList from "../person-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";
import PlanetList from "../planet-list";
import PlanetDetails from "../planet-details";

import "./app.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <PlanetList />
        </div>
        <div className="col-md-6">
          <PlanetDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
