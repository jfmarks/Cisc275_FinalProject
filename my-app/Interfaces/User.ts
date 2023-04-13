import { rating } from "./Rating";
import { restaurant } from "./Restaurant";

export interface User {
    id: string;
    username: string;
    favoriteRestaurants: restaurant[];
    leastFavoriteRestaurants: restaurant[];
    ratings: rating[];
}