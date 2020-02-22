import React, { Component } from "react";
import swapiService from "../../services/swapi-service";

import Header from "../header";
import Record from "../record-item";
import ErrorBoundry from "../error-boundry";
import ItemPage from "../item-page";

import RandomPlanet from "../random-planet";

import "./app.css";

class App extends Component {
  swapiService = new swapiService();
  // state = {
  //   selectedItem: {}
  // };

  // onSelectedItem = id => {
  //   this.setState({
  //     selectedItem: id
  //   });
  // };

  render() {
    const {
      getAllPeople,
      getPerson,
      getPersonImage,
      getAllPlanets,
      getPlanet,
      getPlanetImage,
      getAllStarships,
      getStarship,
      getStarshipImage
    } = this.swapiService;
    const randomPlanet = (
      <ErrorBoundry>
        <RandomPlanet getItem={getPlanet} getImage={getPlanetImage}>
          <Record label="Name" field="name" />
          <Record label="Population" field="population" />
          <Record label="Rotation Period" field="rotationPeriod" />
          <Record label="Diameter" field="diameter" />
        </RandomPlanet>
      </ErrorBoundry>
    );
    const planetPage = (
      <ItemPage
        getList={getAllPlanets}
        getItem={getPlanet}
        getImage={getPlanetImage}
      >
        <Record label="Name" field="name" />
        <Record label="Population" field="population" />
        <Record label="Rotation Period" field="rotation_period" />
        <Record label="Diameter" field="diameter" />
      </ItemPage>
    );
    const personPage = (
      <ItemPage
        getList={getAllPeople}
        getItem={getPerson}
        getImage={getPersonImage}
      >
        <Record label="Name" field="name" />
        <Record label="Gender" field="gender" />
        <Record label="Birth Year" field="birthYear" />
        <Record label="Eye Color" field="eyeColor" />
      </ItemPage>
    );
    const starshipPage = (
      <ItemPage
        getList={getAllStarships}
        getItem={getStarship}
        getImage={getStarshipImage}
      >
        <Record label="Name" field="name" />
        <Record label="Model" field="model" />
        <Record label="Length" field="length" />
        <Record label="Cost" field="cost" />
      </ItemPage>
    );

    return (
      <div className="container">
        <Header />
        {randomPlanet}
        {planetPage}
      </div>
    );
  }
}

export default App;
