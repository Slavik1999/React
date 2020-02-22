import React, { Component } from "react";

import Spinner from "../spinner";
import PlanetView from "../starship-view";
import ChooseItem from "../choose-item";
import SwapiService from "../../services/swapi-service";

import "./starship-details.css";

export default class StarshipDetails extends Component {
  swapiService = new SwapiService();

  state = {
    starship: {},
    loading: true,
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
        .then(this.onStarshipLoaded);
    }
  }

  componentDidCatch() {
    this.setState({
      errorFront: true
    });
  }

  onStarshipLoaded = starship => {
    this.setState({
      starship,
      loading: false
    });
  };

  render() {
    const { starship, loading, chooseItem } = this.state;
    const hooseItem = !chooseItem ? <ChooseItem /> : null;
    const spinner = loading && chooseItem ? <Spinner /> : null;
    const content = !loading ? <PlanetView starship={starship} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {hooseItem}
        {spinner}
        {content}
      </div>
    );
  }
}
