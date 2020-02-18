import React, { Component } from "react";

import Spinner from "../spinner";
import Error from "../error";
import PersonView from "../person-view";
import SwapiService from "../../services/swapi-service";

import "./random-person.css";

export default class RandomPerson extends Component {
  swapiService = new SwapiService();

  state = {
    person: {},
    loading: true,
    getError: false
  };

  constructor() {
    super();
    this.updatePerson();
  }

  onPersonLoaded = person => {
    this.setState({
      person,
      loading: false
    });
  };
  Error = () => {
    this.setState({
      getError: true
    });
  };

  updatePerson() {
    const id = 3;
    this.swapiService.getPerson(id).then(this.onPersonLoaded, this.Error);
  }

  render() {
    const { person, loading, getError } = this.state;
    const error = getError ? <Error /> : null;
    const spinner = loading && !error ? <Spinner /> : null;
    const content = !loading ? <PersonView person={person} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {error}
        {spinner}
        {content}
      </div>
    );
  }
}
