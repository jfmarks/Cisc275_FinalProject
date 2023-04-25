import { Rating } from "./Rating";
import { Restaurant } from "./Restaurant";

export interface User {
    id: string;
    username: string;
    favoriteRestaurants: Restaurant[];
    leastFavoriteRestaurants: Restaurant[];
    ratings: Rating[];
}
