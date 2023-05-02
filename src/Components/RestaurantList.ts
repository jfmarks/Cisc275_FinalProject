import { Restaurant, MenuItem } from "../Interfaces";
import ABLogo from "../Images/ABLogo.png";
import chipotlelogo from "../Images/chipotlelogo.png";
import TRLogo from "../Images/TRLogo.png";
import TastyWok from "../Images/TastyWok.png";
import chilis from "../Images/chilis.png";
import olivegarden from "../Images/olivegarden.png";
import RCLogo from "../Images/RCLogo.png";
import redlobster from "../Images/redlobster.png";
import grain from "../Images/grain.png";
import ironhill from "../Images/ironhill.png";
import eldiablo from "../Images/eldiablo.png";
import stoneballoon from "../Images/stoneballoon.png";
import kates from "../Images/kates.png";
import deerpark from "../Images/deerpark.png";
import grottos from "../Images/grottos.png";
import mcdonalds from "../Images/mcdonalds.png";
import wendys from "../Images/wendys.png";
import chickfila from "../Images/chickfila.png";
import tacobell from "../Images/tacobell.png";
import BWW from "../Images/BWW.png";
import twostones from "../Images/twostones.png";
import claymont from "../Images/claymont.png";
import burgerking from "../Images/burgerking.png";
import longjohns from "../Images/longjohns.png";
import auntieannes from "../Images/auntieannes.png";
import cheesecakefactory from "../Images/cheesecakefactory.png";
import cinnabon from "../Images/cinnabon.png";
import {
    ABMenu,
    ChipotleMenu,
    TRMenu,
    TWMenu,
    ChilisMenu,
    OGMenu,
    RCMenu,
    RLMenu,
    GrainMenu,
    IHMenu,
    EDMenu,
    SBMenu,
    KatesMenu,
    DPMenu,
    GrottosMenu,
    McMenu,
    WendysMenu,
    CFAMenu,
    TBMenu,
    BWWMenu,
    TSMenu,
    ClaymontMenu,
    BKMenu,
    LJSMenu,
    AAMenu,
    CCFMenu,
    CinnabonMenu
} from "../Menus/Menus";

const menuItem1: MenuItem = { name: "", description: "", price: "0" };
const AppleBees: Restaurant = {
    id: "1",
    name: "Applebee's Grill and Bar",
    description:
        "Full-service chain bar & grill providing hearty American eats in an informal setting.",
    image: ABLogo,
    menu: ABMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const Chipotle: Restaurant = {
    id: "2",
    name: "Chipotle",
    description:
        "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.",
    image: chipotlelogo,
    menu: ChipotleMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: "$"
};

const Texas_Roadhouse: Restaurant = {
    id: "3",
    name: "Texas Roadhouse",
    description:
        "Lively chain steakhouse serving American fare with a Southwestern spin amid Texas-themed decor.",
    image: TRLogo,
    menu: TRMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const Tasty_Wok: Restaurant = {
    id: "4",
    name: "Tasty Wok",
    description: "Brings nostalgia of the good old college life in China.",
    image: TastyWok,
    menu: TWMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const Chilis: Restaurant = {
    id: "5",
    name: "Chili's",
    description:
        "Family-friendly chain serving classic Tex-Mex & American fare in a Southwestern-style setting.",
    image: chilis,
    menu: ChilisMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const OliveGarden: Restaurant = {
    id: "6",
    name: "Olive Garden",
    description:
        "Lively, family-friendly chain featuring Italian standards such as pastas & salads.",
    image: olivegarden,
    menu: OGMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
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
    priceRange: "$"
};

const Red_Lobster: Restaurant = {
    id: "8",
    name: "Red Lobster",
    description:
        "Lively chain restaurant serving American seafood standards amid New England-themed decor.",
    image: redlobster,
    menu: RLMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const Grain: Restaurant = {
    id: "9",
    name: "Grain Craft Bar + Kitchen",
    description:
        "Rustic-chic gastropub with USB chargers at the bar offering craft beer, upscale bar eats & music.",
    image: grain,
    menu: GrainMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const IronHill: Restaurant = {
    id: "10",
    name: "Iron Hill Brewery & Restaurant",
    description:
        "Regional brewpub chain dispensing housemade beers & elevated comfort food staples.",
    image: ironhill,
    menu: IHMenu,
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: "$$"
};

const ElDiablo: Restaurant = {
    id: "11",
    name: "El Diablo Burritos",
    description:
        "Contemporary counter-serve offering a build-your-own burrito option, plus tacos & quesadillas",
    image: eldiablo,
    menu: EDMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: "$"
};

const StoneBalloon: Restaurant = {
    id: "12",
    name: "Stone Balloon Ale House",
    description:
        "Local brews, classic cocktails & creative New American eats in a former historic music venue",
    image: stoneballoon,
    menu: SBMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const Kates: Restaurant = {
    id: "13",
    name: "Klondike Kate's Restaurant & Saloon",
    description:
        "Classic American fare & drinks in a circa-1880 building featuring vintage railroad station decor",
    image: kates,
    menu: KatesMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const DeerPark: Restaurant = {
    id: "14",
    name: "Deer Park Tavern",
    description:
        "Landmark spot on site with Revolutionary War roots features a bar, American fare & trivia nights.",
    image: deerpark,
    menu: DPMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const Grottos: Restaurant = {
    id: "15",
    name: "Grotto Pizza",
    description:
        "Family-friendly pizzeria & sports-bar chain offering a broad menu of Italian mainstays.",
    image: grottos,
    menu: GrottosMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const McDonalds: Restaurant = {
    id: "16",
    name: "McDonald's",
    description:
        "Classic, long-running fast-food chain known for its burgers & fries.",
    image: mcdonalds,
    menu: McMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: "$"
};

const Wendys: Restaurant = {
    id: "17",
    name: "Wendy's",
    description:
        "Fast-food burger chain serving sides such as chili & baked potatoes.",
    image: wendys,
    menu: WendysMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: "$"
};

const ChickFilA: Restaurant = {
    id: "18",
    name: "Chick-Fil-A",
    description:
        "Fast-food chain serving chicken sandwiches & nuggets along with salads & sides.",
    image: chickfila,
    menu: CFAMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: "$"
};

const TacoBell: Restaurant = {
    id: "19",
    name: "Taco Bell",
    description:
        "Fast-food chain serving Mexican-inspired fare such as tacos, quesadillas & nachos.",
    image: tacobell,
    menu: TBMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: "$"
};

const BuffaloWildWings: Restaurant = {
    id: "20",
    name: "Buffalo Wild Wings",
    description:
        "Chain dishing up wings, tenders & burgers, plus sauces ranging from sweet to very spicy.",
    image: BWW,
    menu: BWWMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const TwoStones: Restaurant = {
    id: "21",
    name: "Two Stones Pub",
    description:
        "Bright gastropub serving a large selection of craft beers & upscale versions of bar food classics.",
    image: twostones,
    menu: TSMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const Claymont: Restaurant = {
    id: "22",
    name: "Claymont Steak Shop",
    description:
        "Cheesesteaks, subs, grinders & other Philly-style fare in a relaxed spot with flat-screen TVs.",
    image: claymont,
    menu: ClaymontMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$"
};

const BurgerKing: Restaurant = {
    id: "23",
    name: "Burger King",
    description:
        "Well-known fast-food chain serving grilled burgers, fries & shakes, plus breakfast.",
    image: burgerking,
    menu: BKMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: "$"
};

const LongJohnSilvers: Restaurant = {
    id: "24",
    name: "Long John Silver's",
    description:
        "Counter-serve chain offering fried fish & seafood combos, plus chicken & sides.",
    image: longjohns,
    menu: LJSMenu,
    averageRating: 0,
    diningExperience: "Fast",
    priceRange: "$"
};

const AuntieAnnes: Restaurant = {
    id: "25",
    name: "Auntie Anne's",
    description:
        "Global chain of counters dispensing sweet & savory soft pretzels with a variety of toppings & dips.",
    image: auntieannes,
    menu: AAMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$"
};

const CheesecakeFactory: Restaurant = {
    id: "26",
    name: "The Cheesecake Factory",
    description:
        "American chain restaurant offering sizable portions from a vast menu including signature cheesecake",
    image: cheesecakefactory,
    menu: CCFMenu,
    averageRating: 0,
    diningExperience: "Casual",
    priceRange: "$$"
};

const Cinnabon: Restaurant = {
    id: "27",
    name: "Cinnabon",
    description:
        "Counter-serve chain serving cinnamon rolls plus other baked goods & specialty frozen beverages.",
    image: cinnabon,
    menu: CinnabonMenu,
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: "$"
};

const restaurant28: Restaurant = {
    id: "28",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant29: Restaurant = {
    id: "29",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant30: Restaurant = {
    id: "30",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant31: Restaurant = {
    id: "31",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant32: Restaurant = {
    id: "32",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant33: Restaurant = {
    id: "33",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant34: Restaurant = {
    id: "34",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant35: Restaurant = {
    id: "35",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant36: Restaurant = {
    id: "36",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant37: Restaurant = {
    id: "37",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant38: Restaurant = {
    id: "38",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant39: Restaurant = {
    id: "39",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant40: Restaurant = {
    id: "40",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant41: Restaurant = {
    id: "41",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant42: Restaurant = {
    id: "42",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant43: Restaurant = {
    id: "43",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant44: Restaurant = {
    id: "44",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant45: Restaurant = {
    id: "45",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant46: Restaurant = {
    id: "46",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant47: Restaurant = {
    id: "47",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant48: Restaurant = {
    id: "48",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant49: Restaurant = {
    id: "49",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
};

const restaurant50: Restaurant = {
    id: "50",
    name: "Indian Sizzler",
    description: "",
    image: "",
    menu: [menuItem1],
    averageRating: 0,
    diningExperience: "Luxury",
    priceRange: ""
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
    Grain,
    IronHill,
    ElDiablo,
    StoneBalloon,
    Kates,
    DeerPark,
    Grottos,
    McDonalds,
    Wendys,
    ChickFilA,
    TacoBell,
    BuffaloWildWings,
    TwoStones,
    Claymont,
    BurgerKing,
    LongJohnSilvers,
    AuntieAnnes,
    CheesecakeFactory,
    Cinnabon,
    restaurant28,
    restaurant29,
    restaurant30,
    restaurant31,
    restaurant32,
    restaurant33,
    restaurant34,
    restaurant35,
    restaurant36,
    restaurant37,
    restaurant38,
    restaurant39,
    restaurant40,
    restaurant41,
    restaurant42,
    restaurant43,
    restaurant44,
    restaurant45,
    restaurant46,
    restaurant47,
    restaurant48,
    restaurant49,
    restaurant50
];

export default RestaurantList;
