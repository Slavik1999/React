import React, { Component } from "react";

import Header from "../header";
import SwapiService from "../../services/swapi-service";
// import { SwapiServiceProvider } from "../../context";
import {
  PlanetPage,
  PersonPage,
  StarshipPage,
  RandomPlanet
} from "../sw-components";

import "./app.css";

class App extends Component {
  swapiService = new SwapiService();
  render() {
    const randomPlanet = <RandomPlanet />;
    const planetPage = <PlanetPage />;
    const personPage = <PersonPage />;
    const starshipPage = <StarshipPage />;

    return (
      <div className="container">
        <Header />
        {randomPlanet}
        {planetPage}
      </div>
    );
    // return (
    //   <SwapiServiceProvider value={this.swapiService}>
    //     <div className="container">
    //       <Header />
    //       {randomPlanet}
    //       {personPage}
    //     </div>
    //   </SwapiServiceProvider>
    // );
  }
}

export default App;
