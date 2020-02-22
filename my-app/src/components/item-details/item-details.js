import React, { Component } from "react";

import Spinner from "../spinner";
import ItemView from "../item-view";

import "./item-details.css";

export default class ItemDetails extends Component {
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
      this.props.getData(this.props.selectedItem).then(this.onItemLoaded);
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
    const { getImage, children } = this.props;
    const hooseItem = !chooseItem ? <ChooseItem /> : null;
    const spinner = loading && chooseItem ? <Spinner /> : null;
    const content = !loading ? (
      <ItemView children={children} getImage={getImage} item={item} />
    ) : null;

    return (
      <div className="random-planet jumbotron rounded">
        {hooseItem}
        {spinner}
        {content}
      </div>
    );
  }
}

const ChooseItem = () => {
  return (
    <div className="Error">
      <h3>Select an item from the list </h3>
    </div>
  );
};
