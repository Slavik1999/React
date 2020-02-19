import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import ErrorFront from "../error-front";
import PersonView from "../person-view";
import SwapiService from "../../services/swapi-service";

import "./random-person.css";

export default class RandomPerson extends Component {
  swapiService = new SwapiService();

  state = {
    person: {},
    loading: true,
    errorNetwork: false,
    errorFront: false
  };

  componentDidMount() {
    this.interval = setInterval(this.updatePerson, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidCatch() {
    this.setState({
      errorFront: true
    });
  }

  onPersonLoaded = person => {
    this.setState({
      person,
      loading: false
    });
  };
  onError = () => {
    this.setState({
      errorNetwork: true
    });
  };

  updatePerson = () => {
    const id = Math.floor(Math.random() * 20 + 1);
    this.swapiService.getPerson(id).then(this.onPersonLoaded, this.onError);
  };

  render() {
    const { person, loading, errorNetwork } = this.state;
    const errorNet = errorNetwork ? <ErrorNetwork /> : null;
    const spinner = loading && !errorNetwork ? <Spinner /> : null;
    const content =
      !loading && !errorNetwork ? <PersonView person={person} /> : null;

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
