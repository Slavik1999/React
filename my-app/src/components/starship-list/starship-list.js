import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import ErrorFront from "../error-front";
import SwapiService from "../../services/swapi-service";

import "./starship-list.css";

export default class StarshipList extends Component {
  swapiService = new SwapiService();

  state = {
    starship: {},
    loading: true,
    errorNetwork: false,
    errorFront: false
  };

  componentDidMount() {
    this.swapiService.getAllStarships().then(this.onStarshipLoaded, this.Error);
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

  onStarshipLoaded = starship => {
    this.setState({
      starship,
      loading: false
    });
  };

  render() {
    const { starship, loading, errorNetwork } = this.state;
    const { onSelectedItem } = this.props;
    const errorNet = errorNetwork ? <ErrorNetwork /> : null;
    const spinner = loading && !errorNetwork ? <Spinner /> : null;
    const content =
      !loading && !errorNetwork ? (
        <ItemView onSelectedItem={onSelectedItem} starship={starship} />
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

const ItemView = ({ starship, onSelectedItem }) => {
  const elements = starship.map(item => {
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
