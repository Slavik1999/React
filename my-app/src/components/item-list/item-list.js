import React from "react";

import "./item-list.css";

const ItemList = ({ onSelectedItem, children, items }) => {
  return (
    <ItemView
      onSelectedItem={onSelectedItem}
      items={items}
      renderItem={children}
    />
  );
};

const ItemView = ({ items, onSelectedItem, renderItem }) => {
  const elements = items.map(items => {
    return (
      <li
        className="list-group-item"
        key={items.id}
        name={items.name}
        onClick={() => onSelectedItem(items.id)}
      >
        {renderItem(items)}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};

export default ItemList;
