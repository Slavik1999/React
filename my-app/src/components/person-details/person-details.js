import React, { Component } from "react";

import Spinner from "../spinner";
import Error from "../error";
import PersonView from "../person-view";
import SwapiService from "../../services/swapi-service";

import "./person-details.css";

export default class PlanetDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    this.updatePerson();
  }

  Error = () => {
    this.setState({
      getError: true
    });
  };

  onPersonLoaded = person => {
    this.setState({
      person,
      loading: false
    });
  };

  updatePerson() {
    const id = 3;
    this.swapiService.getPerson(id).then(this.onPersonLoaded, this.Error);
  }

  render() {
    const { person, loading, getError } = this.state;
    const error = getError ? <Error /> : null;
    const spinner = loading && !getError ? <Spinner /> : null;
    const content =
      !loading && !getError ? <PersonView person={person} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {error}
        {spinner}
        {content}
      </div>
    );
  }
}
