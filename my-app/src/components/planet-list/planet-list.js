import React, { Component } from "react";

import Spinner from "../spinner";
import Error from "../error";
import SwapiService from "../../services/swapi-service";

import "./planet-list.css";

export default class PlanetList extends Component {
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

  Error = () => {
    this.setState({
      getError: true
    });
  };

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet() {
    const id = 3;
    this.swapiService.getAllPlanets().then(this.onPlanetLoaded, this.Error);
  }

  render() {
    const { planet, loading, getError } = this.state;
    const error = getError ? <Error /> : null;
    const spinner = loading && !error ? <Spinner /> : null;
    const content = !loading ? <ItemView planet={planet} /> : null;

    return (
      <div>
        {error}
        {spinner}
        {content}
      </div>
    );
  }
}

const ItemView = ({ planet }) => {
  const elements = planet.map(item => {
    const { name } = item;
    return (
      <li className="list-group-item" key={name} name={name}>
        {name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};
