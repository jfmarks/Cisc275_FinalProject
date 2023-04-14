import { Restaurant } from "./Restaurant";

export interface Admin {
    id: string;
    username: string;
    restaurantsToEdit: Restaurant[];
  }
  