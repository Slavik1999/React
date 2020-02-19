import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import ErrorFront from "../error-front";
import SwapiService from "../../services/swapi-service";

import "./planet-list.css";

export default class PlanetList extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    errorNetwork: false,
    errorFront: false
  };

  componentDidMount() {
    this.swapiService.getAllPlanets().then(this.onPlanetLoaded, this.onError);
  }

  componentDidCatch() {
    this.setState({
      errorFront: true
    });
  }

  onError = () => {
    this.setState({
      errorNetwork: true
    });
  };

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  render() {
    const { planet, loading, errorNetwork } = this.state;
    const { onSelectedItem } = this.props;
    const errorNet = errorNetwork ? <ErrorNetwork /> : null;
    const spinner = loading && !errorNetwork ? <Spinner /> : null;
    const content =
      !loading && !errorNetwork ? (
        <ItemView onSelectedItem={onSelectedItem} planet={planet} />
      ) : null;

    if (this.state.errorFront) {
      return <ErrorFront />;
    }

    return (
      <div>
        {errorNet}
        {spinner}
        {content}
      </div>
    );
  }
}

const ItemView = ({ planet, onSelectedItem }) => {
  const elements = planet.map(item => {
    const { name, id } = item;
    return (
      <li
        className="list-group-item"
        key={id}
        name={name}
        onClick={() => onSelectedItem(id)}
      >
        {name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};
