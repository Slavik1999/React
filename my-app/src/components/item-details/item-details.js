import React, { Component } from "react";

import Spinner from "../spinner";

import ChooseItem from "../choose-item";
import PersonView from "../person-view";
import SwapiService from "../../services/swapi-service";

import "./item-details.css";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: {},
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
        .getPerson(this.props.selectedItem)
        .then(this.onItemLoaded);
    }
  }

  onItemLoaded = item => {
    this.setState({
      item,
      loading: false
    });
  };

  render() {
    const { item, loading, chooseItem } = this.state;
    const hooseItem = !chooseItem ? <ChooseItem /> : null;
    const spinner = loading && chooseItem ? <Spinner /> : null;
    const content = !loading ? <PersonView item={item} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {hooseItem}
        {spinner}
        {content}
      </div>
    );
  }
}
