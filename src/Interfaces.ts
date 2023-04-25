export interface Admin {
    id: string;
    username: string;
    restaurantsToEdit: Restaurant[];
}

export interface Super extends Admin {
    restaurantsToAdd: Restaurant[];
    restaurantsToDelete: Restaurant[];
}

export interface MenuItem {
    name: string;
    description: string;
    price: number;
}

export interface PriceRange {
    minPrice: number;
    maxPrice: number;
}

export interface Rating {
    restaurantId: string;
    rating: number;
    review: string;
}

export interface Restaurant {
    id: string;
    name: string;
    description: string;
    image: string;
    menu: MenuItem[];
    averageRating: number;
    //priceRange: PriceRange;
    diningExperience: string;
}

export interface User {
    id: string;
    username: string;
    favoriteRestaurants: Restaurant[];
    leastFavoriteRestaurants: Restaurant[];
    ratings: Rating[];
}
