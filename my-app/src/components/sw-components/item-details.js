import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import { WithDetails } from "../../hocs";

const {
  getPerson,
  getPersonImage,
  getPlanet,
  getPlanetImage,
  getStarship,
  getStarshipImage
} = new SwapiService();

const PersonDetails = WithDetails(ItemDetails, getPerson, getPersonImage);
const PlanetDetails = WithDetails(ItemDetails, getPlanet, getPlanetImage);
const StarshipDetails = WithDetails(ItemDetails, getStarship, getStarshipImage);

export { PersonDetails, PlanetDetails, StarshipDetails };
