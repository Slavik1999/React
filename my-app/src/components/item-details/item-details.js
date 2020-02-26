import React from "react";
import ItemView from "../item-view";

import "./item-details.css";

const ItemDetails = ({ children, getImage, item }) => {
  return <ItemView children={children} getImage={getImage} item={item} />;
};

export default ItemDetails;
