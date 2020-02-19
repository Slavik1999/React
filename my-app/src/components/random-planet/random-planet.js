import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import ErrorFront from "../error-front";
import PlanetView from "../planet-view";
import SwapiService from "../../services/swapi-service";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    errorNetwork: false,
    errorFront: false
  };

  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidCatch() {
    this.setState({
      errorFront: true
    });
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };
  Error = () => {
    this.setState({
      errorNetwork: true
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 60 + 1);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded, this.Error);
  };

  render() {
    const { planet, loading, errorNetwork } = this.state;
    const errorNet = errorNetwork ? <ErrorNetwork /> : null;
    const spinner = loading && !errorNetwork ? <Spinner /> : null;
    const content =
      !loading && !errorNetwork ? <PlanetView planet={planet} /> : null;

    if (this.state.errorFront) {
      return <ErrorFront />;
    }

    return (
      <div className="random-planet jumbotron rounded">
        {errorNet}
        {spinner}
        {content}
      </div>
    );
  }
}
