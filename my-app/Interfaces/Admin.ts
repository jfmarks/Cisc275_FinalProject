import { restaurant } from "./Restaurant";

export interface Admin {
    id: string;
    username: string;
    restaurantsToEdit: restaurant[];
  }
  