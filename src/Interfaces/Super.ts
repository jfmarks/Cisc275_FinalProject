import { Admin } from "./Admin";
import { Restaurant } from "./Restaurant";

export interface Super extends Admin {
  restaurantsToAdd: Restaurant[];
  restaurantsToDelete: Restaurant[];
}
