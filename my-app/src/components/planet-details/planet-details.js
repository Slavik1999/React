import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import ErrorFront from "../error-front";
import PlanetView from "../planet-view";
import ChooseItem from "../choose-item";
import SwapiService from "../../services/swapi-service";

import "./planet-details.css";

export default class PlanetDetails extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    errorNetwork: false,
    errorFront: false,
    chooseItem: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.setState({
        loading: true,
        chooseItem: true
      });
      this.swapiService
        .getPlanet(this.props.selectedItem)
        .then(this.onPlanetLoaded, this.Error);
    }
  }

  componentDidCatch() {
    this.setState({
      errorFront: true
    });
  }

  Error = () => {
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
    const { planet, loading, errorNetwork, chooseItem } = this.state;
    const hooseItem = !chooseItem ? <ChooseItem /> : null;
    const errorNet = errorNetwork && chooseItem ? <ErrorNetwork /> : null;
    const spinner = loading && !errorNetwork && chooseItem ? <Spinner /> : null;
    const content =
      !loading && !errorNetwork ? <PlanetView planet={planet} /> : null;

    if (this.state.errorFront) {
      return <ErrorFront />;
    }

    return (
      <div className="random-planet jumbotron rounded">
        {hooseItem}
        {errorNet}
        {spinner}
        {content}
      </div>
    );
  }
}
