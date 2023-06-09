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
    price: string;
}

export interface Rating {
    restaurantId: string;
    rating: number;
}

export interface Restaurant {
    id: string;
    name: string;
    description: string;
    image: string;
    menu: MenuItem[];
    averageRating: number;
    priceRange: string;
    diningExperience: string;
    reviews: string[];
}

export interface User {
    id: string;
    username: string;
    userList: Restaurant[];
    ratings: Rating[];
}

export interface CurrUser {
    type: string;
    id: string;
    username: string;
}

export interface CurrSort {
    type: string;
}

export interface DraggedRestaurant {
    type: string;
    id: string;
    newItem: string;
}
