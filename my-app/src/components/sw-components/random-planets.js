import React from "react";
import Record from "../record-item";
import RandomPlanets from "../random-planet";
import { WithRandom, WithChildren } from "../../hocs";
import SwapiService from "../../services/swapi-service";
const { getPlanet, getPlanetImage } = new SwapiService();

const childrenRecord = <Record label="Name" field="name" />;
{
  /* <Record label="Name" field="name" />
  <Record label="Diameter" field="diameter" /> 
<Record label="Population" field="population" />
<Record label="Rotation Period" field="rotationPeriod" /> */
}
const RandomPlanet = WithRandom(
  WithChildren(RandomPlanets, childrenRecord),
  getPlanet,
  getPlanetImage
);

export { RandomPlanet };
