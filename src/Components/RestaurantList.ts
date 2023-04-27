import { PriceRange, Restaurant, MenuItem } from "../Interfaces";
import ABLogo from "../Images/ABLogo.png";
import chipotlelogo from "../Images/chipotlelogo.png";
import TRLogo from "../Images/TRLogo.png";
import TastyWok from "../Images/TastyWok.png";
import chilis from "../Images/chilis.png";
import olivegarden from "../Images/olivegarden.png";
import RCLogo from "../Images/RCLogo.png";
import redlobster from "../Images/redlobster.png";
import {
    ABMenu,
    ChipotleMenu,
    TRMenu,
    TWMenu,
    ChilisMenu,
    OGMenu,
    RCMenu,
    RLMenu
} from "../Menus/Menus";

const menuItem1: MenuItem = { name: "", description: "", price: "0" };
const priceRange1: PriceRange = { minPrice: 0, maxPrice: 10 };
const AppleBees: Restaurant = {
    id: "1",
    name: "Applebee's Grill and Bar",
    description:
        "Good food, good people. The Applebee's concept focuses on casual dining, with mainstream American dishes such as salads, chicken, pasta, burgers, and riblets (Applebee's signature dish). Fun Fact: The founders picked the name out of a phone book Founders Bill and T.J. Palmer looked for inspiration in a phone book and fell in love with the name Appleby. After finding there was already a copyright on the name, they changed it to Applebee's.",
    image: ABLogo,
    menu: ABMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: priceRange1
};

const Chipotle: Restaurant = {
    id: "2",
    name: "Chipotle",
    description:
        "Chipotle was born of the radical belief that there is a connection between how food is raised and prepared, and how it tastes. Real is better. Better for You, Better for People, Better for Our Planet. It may be the hard way to do things, but it's the right way.",
    image: chipotlelogo,
    menu: ChipotleMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: priceRange1
};

const Texas_Roadhouse: Restaurant = {
    id: "3",
    name: "Texas Roadhouse",
    description:
        "Welcome To Legendary. Legendary means Hand-Cut Steaks, Fall-Off-The-Bone Ribs, Made-From-Scratch Sides, Ice-Cold Beer, and of course, our irresistible Fresh-Baked Bread.",
    image: TRLogo,
    menu: TRMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: priceRange1
};

const Tasty_Wok: Restaurant = {
    id: "4",
    name: "Tasty Wok",
    description: "Brings nostalgia of the good old college life in China.",
    image: TastyWok,
    menu: TWMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: priceRange1
};

const Chilis: Restaurant = {
    id: "5",
    name: "Chili's",
    description:
        "Like no place else. Fun. Fresh. Flavorful. Chili's serves American food, Tex-Mex cuisine and dishes influenced by Mexican cuisine, such as spicy shrimp tacos, quesadillas, fajitas. In addition to their regular menu, the company offers a nutritional menu, allergen menu, and vegetarian menu.",
    image: chilis,
    menu: ChilisMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: priceRange1
};

const OliveGarden: Restaurant = {
    id: "6",
    name: "Olive Garden",
    description:
        "Italian generosity is always on the table. At Olive Garden, we know that life is better together and everyone is happiest when they're with family.",
    image: olivegarden,
    menu: OGMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: priceRange1
};

const Raising_Canes: Restaurant = {
    id: "7",
    name: "Raising Cane's",
    description:
        "Raising Cane's Chicken Fingers is an American fast-food chain specializing in chicken fingers founded in 1996 in Baton Rouge, Louisiana by Todd Graves and Craig Silvey. The company is named after Graves's dog, a yellow Labrador.",
    image: RCLogo,
    menu: RCMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: priceRange1
};

const Red_Lobster: Restaurant = {
    id: "8",
    name: "Red Lobster",
    description:
        "At Red Lobster, our passion for seafood drives how we create every dish, and comes through in how we source our seafood, and give back to our communities.",
    image: redlobster,
    menu: RLMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: priceRange1
};

const restaurant9: Restaurant = {
    id: "1",
    name: "KelpShakeShack",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant10: Restaurant = {
    id: "1",
    name: "PizzaCabin",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant11: Restaurant = {
    id: "1",
    name: "FatherJohn's",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant12: Restaurant = {
    id: "1",
    name: "Raisin Canes",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant13: Restaurant = {
    id: "1",
    name: "Sakura Japanese Steakhouse",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant14: Restaurant = {
    id: "1",
    name: "Claymont Steak Shop",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant15: Restaurant = {
    id: "1",
    name: "Buffalo Wild Wings",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant16: Restaurant = {
    id: "1",
    name: "Suki Hana",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant17: Restaurant = {
    id: "1",
    name: "Playa Bowls",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};

const restaurant18: Restaurant = {
    id: "1",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: priceRange1
};
const RestaurantList: Restaurant[] = [
    AppleBees,
    Chipotle,
    Texas_Roadhouse,
    Tasty_Wok,
    Chilis,
    OliveGarden,
    Raising_Canes,
    Red_Lobster,
    restaurant9,
    restaurant10,
    restaurant11,
    restaurant12,
    restaurant13,
    restaurant14,
    restaurant15,
    restaurant16,
    restaurant17,
    restaurant18
];

export default RestaurantList;
