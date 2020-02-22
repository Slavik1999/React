import React, { Component } from "react";

import Spinner from "../spinner";

import "./item-list.css";

export default class ItemList extends Component {
  state = {
    item: {},
    loading: true
  };

  componentDidMount() {
    this.props.getData().then(this.onItemLoaded);
  }

  onItemLoaded = item => {
    this.setState({
      item,
      loading: false
    });
  };

  render() {
    const { item, loading } = this.state;
    const { onSelectedItem, renderItem } = this.props;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? (
      <ItemView
        onSelectedItem={onSelectedItem}
        item={item}
        renderItem={renderItem}
      />
    ) : null;

    return (
      <div>
        {spinner}
        {content}
      </div>
    );
  }
}

const ItemView = ({ item, onSelectedItem, renderItem }) => {
  const elements = item.map(item => {
    return (
      <li
        className="list-group-item"
        key={item.id}
        name={item.name}
        onClick={() => onSelectedItem(item.id)}
      >
        {renderItem(item)}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};
