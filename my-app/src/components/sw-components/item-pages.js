import React from "react";
import Record from "../record-item";
import { PeopleList, PlanetList, StarshipList } from "./item-lists";
import { PersonDetails, PlanetDetails, StarshipDetails } from "./item-details";
import ItemPage from "../item-page";

const PlanetPage = () => (
  <ItemPage GetList={PlanetList} GetItem={PlanetDetails}>
    <Record label="Name" field="name" />
    <Record label="Population" field="population" />
    <Record label="Rotation Period" field="rotation_period" />
    <Record label="Diameter" field="diameter" />
  </ItemPage>
);

const PersonPage = () => (
  <ItemPage GetList={PeopleList} GetItem={PersonDetails}>
    <Record label="Name" field="name" />
    <Record label="Gender" field="gender" />
    <Record label="Birth Year" field="birthYear" />
    <Record label="Eye Color" field="eyeColor" />
  </ItemPage>
);

const StarshipPage = () => (
  <ItemPage GetList={StarshipList} GetItem={StarshipDetails}>
    <Record label="Name" field="name" />
    <Record label="Model" field="model" />
    <Record label="Length" field="length" />
    <Record label="Cost" field="cost" />
  </ItemPage>
);

export { PlanetPage, PersonPage, StarshipPage };
