import { MenuItem } from "./MenuItem";
import { PriceRange } from "./PriceRange";
import { DiningExperience } from "./DiningExperience";

export interface Restaurant {
    id: string;
    name: string;
    description: string;
    image: string;
    menu: MenuItem[];
    averageRating: number;
    priceRange: PriceRange;
    diningExperience: DiningExperience;
}
