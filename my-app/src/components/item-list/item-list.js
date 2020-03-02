import React from "react";

import "./item-list.css";

const ItemList = ({ onSelectedItem, children, items }) => {
  const elements = items.map(items => {
    return (
      <li
        className="list-group-item"
        key={items.id}
        name={items.name}
        onClick={() => onSelectedItem(items.id)}
      >
        {children(items)}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
};

export default ItemList;
