import React from "react";

import "./item-view.css";

const ItemView = ({ item, getImage, children }) => {
  return (
    <React.Fragment>
      <img className="item-image" src={getImage(item)} />
      <div>
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ItemView;
