import React, { Component } from "react";
import swapiService from "../../services/swapi-service";

import Header from "../header";

import Row from "../row";
import ErrorBoundry from "../error-boundry";

import ItemList from "../item-list";
import ItemDetails from "../item-details";

import RandomPlanet from "../random-planet";
import PlanetDetails from "../planet-details";

import StarshipDetails from "../starship-details";

import "./app.css";

class App extends Component {
  swapiService = new swapiService();
  state = {
    selectedItem: {}
  };

  onSelectedItem = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const peopleList = (
      <ErrorBoundry>
        <ItemList
          getData={this.swapiService.getAllPeople()}
          onSelectedItem={this.onSelectedItem}
          renderItem={item => `${item.name}`}
        />
      </ErrorBoundry>
    );
    const peopleDetails = (
      <ErrorBoundry>
        <ItemDetails selectedItem={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return (
      <div className="container">
        <Header />
        <ErrorBoundry>
          <RandomPlanet />
        </ErrorBoundry>

        <Row left={peopleList} right={peopleDetails} />
      </div>
    );
  }
}

export default App;
