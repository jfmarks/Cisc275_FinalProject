import { Rating } from "./Interfaces";
import { Restaurant } from "./Interfaces";

export interface User {
    id: string;
    username: string;
    favoriteRestaurants: Restaurant[];
    leastFavoriteRestaurants: Restaurant[];
    ratings: Rating[];
}
