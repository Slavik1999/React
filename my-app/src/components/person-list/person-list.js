import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import ErrorFront from "../error-front";
import SwapiService from "../../services/swapi-service";

import "./person-list.css";

export default class PeopleList extends Component {
  swapiService = new SwapiService();

  state = {
    person: {},
    loading: true,
    errorNetwork: false,
    errorFront: false
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(this.onPersonLoaded, this.Error);
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

  onPersonLoaded = person => {
    this.setState({
      person,
      loading: false
    });
  };

  render() {
    const { person, loading, errorNetwork } = this.state;
    const { onSelectedItem } = this.props;
    const errorNet = errorNetwork ? <ErrorNetwork /> : null;
    const spinner = loading && !errorNetwork ? <Spinner /> : null;
    const content =
      !loading && !errorNetwork ? (
        <ItemView onSelectedItem={onSelectedItem} person={person} />
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

const ItemView = ({ person, onSelectedItem }) => {
  const elements = person.map(item => {
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
