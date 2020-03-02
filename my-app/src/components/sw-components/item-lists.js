import ItemList from "../item-list";
import { WithItems, WithChildren } from "../../hocs";
import SwapiService from "../../services/swapi-service";

const { getAllPlanets, getAllPeople, getAllStarships } = new SwapiService();

const renderPeoples = item => `${item.name}`;
const renderPlanets = item => `${item.name}`;
const renderStarships = item => `${item.name}`;

const PeopleList = WithItems(
  WithChildren(ItemList, renderPeoples),
  getAllPeople
);
const PlanetList = WithItems(
  WithChildren(ItemList, renderPlanets),
  getAllPlanets
);
const StarshipList = WithItems(
  WithChildren(ItemList, renderStarships),
  getAllStarships
);

export { PeopleList, PlanetList, StarshipList };
