import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import ErrorFront from "../error-front";
import ChooseItem from "../choose-item";
import PersonView from "../person-view";
import SwapiService from "../../services/swapi-service";

import "./person-details.css";

export default class PlanetDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: {},
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
        .getPerson(this.props.selectedItem)
        .then(this.onPersonLoaded, this.onError);
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

  onPersonLoaded = person => {
    this.setState({
      person,
      loading: false
    });
  };

  render() {
    const { person, loading, errorNetwork, chooseItem } = this.state;
    const hooseItem = !chooseItem ? <ChooseItem /> : null;
    const errorNet = errorNetwork && chooseItem ? <ErrorNetwork /> : null;
    const spinner = loading && !errorNetwork && chooseItem ? <Spinner /> : null;
    const content =
      !loading && !errorNetwork ? <PersonView person={person} /> : null;

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
