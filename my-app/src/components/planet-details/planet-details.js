import React, { Component } from "react";

import Spinner from "../spinner";
import PlanetView from "../planet-view";
import ChooseItem from "../choose-item";
import SwapiService from "../../services/swapi-service";

import "./planet-details.css";

export default class PlanetDetails extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
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
        .getPlanet(this.props.selectedItem)
        .then(this.onPlanetLoaded);
    }
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  render() {
    const { planet, loading, chooseItem } = this.state;
    const hooseItem = !chooseItem ? <ChooseItem /> : null;
    const spinner = loading && chooseItem ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {hooseItem}
        {spinner}
        {content}
      </div>
    );
  }
}
