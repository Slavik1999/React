import React, { Component } from "react";

import Spinner from "../spinner";
import ItemView from "../item-view";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 60 + 1);
    this.props.getItem(id).then(this.onPlanetLoaded);
  };

  render() {
    const { planet, loading } = this.state;
    const { getImage, children } = this.props;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? (
      <ItemView getImage={getImage} children={children} item={planet} />
    ) : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    );
  }
}
