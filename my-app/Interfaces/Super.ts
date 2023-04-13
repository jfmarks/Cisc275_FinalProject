import { Admin } from "./Admin";
import { restaurant } from "./Restaurant";

export interface Super extends Admin {
  restaurantsToAdd: restaurant[];
  restaurantsToDelete: restaurant[];
}
