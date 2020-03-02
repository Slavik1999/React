import React from "react";

import Record from "../record-item";
import ItemDetails from "../item-details";

import SwapiService from "../../services/swapi-service";
import { WithRandom, WithChildren } from "../../hocs";

const { getPlanet, getPlanetImage } = new SwapiService();

const childrenRecord = () => {
  return <Record label="Population" field="population" />;
};

//{
/* <Record label="Name" field="name" />
  <Record label="Diameter" field="diameter" /> 
<Record label="Population" field="population" />
<Record label="Rotation Period" field="rotationPeriod" /> */
//}

const RandomPlanet = WithRandom(
  WithChildren(ItemDetails, childrenRecord()),
  getPlanet,
  getPlanetImage
);

export { RandomPlanet };
