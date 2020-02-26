import React from "react";

import ItemView from "../item-view";

import "./random-planet.css";

const RandomPlanet = ({ getImage, children, item }) => {
  return <ItemView getImage={getImage} children={children} item={item} />;
};

export default RandomPlanet;
