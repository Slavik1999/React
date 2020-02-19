import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import ErrorFront from "../error-front";
import PlanetView from "../starship-view";
import ChooseItem from "../choose-item";
import SwapiService from "../../services/swapi-service";

import "./starship-details.css";

export default class StarshipDetails extends Component {
  swapiService = new SwapiService();

  state = {
    starship: {},
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
        .getStarship(this.props.selectedItem)
        .then(this.onStarshipLoaded, this.onError);
    }
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

  onStarshipLoaded = starship => {
    this.setState({
      starship,
      loading: false
    });
  };

  render() {
    const { starship, loading, errorNetwork, chooseItem } = this.state;
    const hooseItem = !chooseItem ? <ChooseItem /> : null;
    const errorNet = errorNetwork && chooseItem ? <ErrorNetwork /> : null;
    const spinner = loading && !errorNetwork && chooseItem ? <Spinner /> : null;
    const content =
      !loading && !errorNetwork ? <PlanetView starship={starship} /> : null;

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
