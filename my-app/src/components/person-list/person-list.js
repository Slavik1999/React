import React, { Component } from "react";

import Spinner from "../spinner";
import Error from "../error";
import SwapiService from "../../services/swapi-service";

import "./person-list.css";

export default class PeopleList extends Component {
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
    this.swapiService.getAllPeople().then(this.onPersonLoaded, this.Error);
  }

  render() {
    const { person, loading, getError } = this.state;
    const error = getError ? <Error /> : null;
    const spinner = loading && !getError ? <Spinner /> : null;
    const content = !loading && !getError ? <ItemView person={person} /> : null;

    return (
      <div>
        {error}
        {spinner}
        {content}
      </div>
    );
  }
}

const ItemView = ({ person }) => {
  const elements = person.map(item => {
    const { name } = item;
    return (
      <li className="list-group-item" key={name} name={name}>
        {name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};
