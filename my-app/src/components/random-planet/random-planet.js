import React, { Component } from "react";

import Spinner from "../spinner";
import Error from "../error";
import PlanetView from "../planet-view";
import SwapiService from "../../services/swapi-service";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    getError: false
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };
  Error = () => {
    this.setState({
      getError: true
    });
  };

  updatePlanet() {
    const id = 3;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded, this.Error);
  }

  render() {
    const { planet, loading, getError } = this.state;
    const error = getError ? <Error /> : null;
    const spinner = loading && !getError ? <Spinner /> : null;
    const content =
      !loading && !getError ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {error}
        {spinner}
        {content}
      </div>
    );
  }
}
