import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import SwapiService from "../../services/swapi-service";
import {
  PlanetPage,
  PeoplePage,
  StarshipPage,
  RandomPlanet
} from "../sw-components";

import "./app.css";

class App extends Component {
  swapiService = new SwapiService();
  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Route path="/" component={RandomPlanet} />
          <Route path="/" component={() => <h1>Welcom!</h1>} exact />

          <Route path="/peoples/:id?" component={PeoplePage} />
          <Route path="/planets/:id?" component={PlanetPage} />
          <Route path="/starships/:id?" component={StarshipPage} />
        </Router>
      </div>
    );
  }
}

export default App;
