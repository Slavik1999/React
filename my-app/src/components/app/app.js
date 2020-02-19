import React, { Component } from "react";

import Header from "../header";

import RandomPerson from "../random-person";
import PersonList from "../person-list";
import PersonDetails from "../person-details";

import RandomPlanet from "../random-planet";
import PlanetList from "../planet-list";
import PlanetDetails from "../planet-details";

import StarshipList from "../starship-list";
import StarshipDetails from "../starship-details";
import "./app.css";

class App extends Component {
  state = {
    selectedItem: {}
  };

  onSelectedItem = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <StarshipList onSelectedItem={this.onSelectedItem} />
          </div>
          <div className="col-md-6">
            <StarshipDetails selectedItem={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
