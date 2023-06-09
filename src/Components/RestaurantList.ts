import { Restaurant } from "../Interfaces";
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
import fiveguys from "../Images/fiveguys.png";
import indiansizzler from "../Images/indiansizzler.png";
import playabowls from "../Images/playabowls.png";
import hamiltons from "../Images/hamiltons.png";
import subway from "../Images/subway.png";
import dairyqueen from "../Images/dairyqueen.png";
import udairy from "../Images/udairy.png";
import jerseymikes from "../Images/jerseymikes.png";
import jimmyjohns from "../Images/jimmyjohns.png";
import capriottis from "../Images/capriottis.png";
import pfchangs from "../Images/pfchangs.png";
import pandaexpress from "../Images/pandaexpress.png";
import kfc from "../Images/kfc.png";
import baskinrobbins from "../Images/baskinrobbins.png";
import sakura from "../Images/sakura.png";
import pokebros from "../Images/pokebros.png";
import starbucks from "../Images/starbucks.png";
import wawa from "../Images/wawa.png";
import shakeshack from "../Images/shakeshack.png";
import dominos from "../Images/dominos.png";
import papajohns from "../Images/papajohns.png";
import pizzahut from "../Images/pizzahut.png";
import dunkin from "../Images/dunkin.png";
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
    CinnabonMenu,
    FGMenu,
    ISMenu,
    SakuraMenu,
    PBMenu,
    HamiltonsMenu,
    SubwayMenu,
    DQMenu,
    UDairyMenu,
    JMMenu,
    JJMenu,
    CapriottisMenu,
    PFCMenu,
    PEMenu,
    KFCMenu,
    BRMenu,
    PokeMenu,
    StarbucksMenu,
    WawaMenu,
    SSMenu,
    DominosMenu,
    PJMenu,
    PHMenu,
    DDMenu
} from "../Menus/Menus";

const AppleBees: Restaurant = {
    id: "1",
    name: "Applebee's Grill and Bar",
    description:
        "Full-service chain bar & grill providing hearty American eats in an informal setting.",
    image: ABLogo,
    menu: ABMenu,
    averageRating: 3.8,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Chipotle: Restaurant = {
    id: "2",
    name: "Chipotle",
    description:
        "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.",
    image: chipotlelogo,
    menu: ChipotleMenu,
    averageRating: 3.1,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const Texas_Roadhouse: Restaurant = {
    id: "3",
    name: "Texas Roadhouse",
    description:
        "Lively chain steakhouse serving American fare with a Southwestern spin amid Texas-themed decor.",
    image: TRLogo,
    menu: TRMenu,
    averageRating: 1.6,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Tasty_Wok: Restaurant = {
    id: "4",
    name: "Tasty Wok",
    description: "Brings nostalgia of the good old college life in China.",
    image: TastyWok,
    menu: TWMenu,
    averageRating: 4.0,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Chilis: Restaurant = {
    id: "5",
    name: "Chili's",
    description:
        "Family-friendly chain serving classic Tex-Mex & American fare in a Southwestern-style setting.",
    image: chilis,
    menu: ChilisMenu,
    averageRating: 2.5,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const OliveGarden: Restaurant = {
    id: "6",
    name: "Olive Garden",
    description:
        "Lively, family-friendly chain featuring Italian standards such as pastas & salads.",
    image: olivegarden,
    menu: OGMenu,
    averageRating: 1.2,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Raising_Canes: Restaurant = {
    id: "7",
    name: "Raising Cane's",
    description:
        "Raising Cane's Chicken Fingers is an American fast-food chain specializing in chicken fingers founded in 1996 in Baton Rouge, Louisiana by Todd Graves and Craig Silvey. The company is named after Graves's dog, a yellow Labrador.",
    image: RCLogo,
    menu: RCMenu,
    averageRating: 3.7,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const Red_Lobster: Restaurant = {
    id: "8",
    name: "Red Lobster",
    description:
        "Lively chain restaurant serving American seafood standards amid New England-themed decor.",
    image: redlobster,
    menu: RLMenu,
    averageRating: 3.9,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Grain: Restaurant = {
    id: "9",
    name: "Grain Craft Bar + Kitchen",
    description:
        "Rustic-chic gastropub with USB chargers at the bar offering craft beer, upscale bar eats & music.",
    image: grain,
    menu: GrainMenu,
    averageRating: 3.9,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const IronHill: Restaurant = {
    id: "10",
    name: "Iron Hill Brewery & Restaurant",
    description:
        "Regional brewpub chain dispensing housemade beers & elevated comfort food staples.",
    image: ironhill,
    menu: IHMenu,
    averageRating: 2.6,
    diningExperience: "Luxury",
    priceRange: "$$",
    reviews: []
};

const ElDiablo: Restaurant = {
    id: "11",
    name: "El Diablo Burritos",
    description:
        "Contemporary counter-serve offering a build-your-own burrito option, plus tacos & quesadillas",
    image: eldiablo,
    menu: EDMenu,
    averageRating: 2.6,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const StoneBalloon: Restaurant = {
    id: "12",
    name: "Stone Balloon Ale House",
    description:
        "Local brews, classic cocktails & creative New American eats in a former historic music venue",
    image: stoneballoon,
    menu: SBMenu,
    averageRating: 4.7,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Kates: Restaurant = {
    id: "13",
    name: "Klondike Kate's Restaurant & Saloon",
    description:
        "Classic American fare & drinks in a circa-1880 building featuring vintage railroad station decor",
    image: kates,
    menu: KatesMenu,
    averageRating: 4.5,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const DeerPark: Restaurant = {
    id: "14",
    name: "Deer Park Tavern",
    description:
        "Landmark spot on site with Revolutionary War roots features a bar, American fare & trivia nights.",
    image: deerpark,
    menu: DPMenu,
    averageRating: 2.3,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Grottos: Restaurant = {
    id: "15",
    name: "Grotto Pizza",
    description:
        "Family-friendly pizzeria & sports-bar chain offering a broad menu of Italian mainstays.",
    image: grottos,
    menu: GrottosMenu,
    averageRating: 2.9,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const McDonalds: Restaurant = {
    id: "16",
    name: "McDonald's",
    description:
        "Classic, long-running fast-food chain known for its burgers & fries.",
    image: mcdonalds,
    menu: McMenu,
    averageRating: 1.6,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const Wendys: Restaurant = {
    id: "17",
    name: "Wendy's",
    description:
        "Fast-food burger chain serving sides such as chili & baked potatoes.",
    image: wendys,
    menu: WendysMenu,
    averageRating: 1.8,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const ChickFilA: Restaurant = {
    id: "18",
    name: "Chick-Fil-A",
    description:
        "Fast-food chain serving chicken sandwiches & nuggets along with salads & sides.",
    image: chickfila,
    menu: CFAMenu,
    averageRating: 2.3,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const TacoBell: Restaurant = {
    id: "19",
    name: "Taco Bell",
    description:
        "Fast-food chain serving Mexican-inspired fare such as tacos, quesadillas & nachos.",
    image: tacobell,
    menu: TBMenu,
    averageRating: 1.8,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const BuffaloWildWings: Restaurant = {
    id: "20",
    name: "Buffalo Wild Wings",
    description:
        "Chain dishing up wings, tenders & burgers, plus sauces ranging from sweet to very spicy.",
    image: BWW,
    menu: BWWMenu,
    averageRating: 2.9,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const TwoStones: Restaurant = {
    id: "21",
    name: "Two Stones Pub",
    description:
        "Bright gastropub serving a large selection of craft beers & upscale versions of bar food classics.",
    image: twostones,
    menu: TSMenu,
    averageRating: 4.5,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Claymont: Restaurant = {
    id: "22",
    name: "Claymont Steak Shop",
    description:
        "Cheesesteaks, subs, grinders & other Philly-style fare in a relaxed spot with flat-screen TVs.",
    image: claymont,
    menu: ClaymontMenu,
    averageRating: 4.0,
    diningExperience: "Casual",
    priceRange: "$",
    reviews: []
};

const BurgerKing: Restaurant = {
    id: "23",
    name: "Burger King",
    description:
        "Well-known fast-food chain serving grilled burgers, fries & shakes, plus breakfast.",
    image: burgerking,
    menu: BKMenu,
    averageRating: 1.2,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const LongJohnSilvers: Restaurant = {
    id: "24",
    name: "Long John Silver's",
    description:
        "Counter-serve chain offering fried fish & seafood combos, plus chicken & sides.",
    image: longjohns,
    menu: LJSMenu,
    averageRating: 1.0,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const AuntieAnnes: Restaurant = {
    id: "25",
    name: "Auntie Anne's",
    description:
        "Global chain of counters dispensing sweet & savory soft pretzels with a variety of toppings & dips.",
    image: auntieannes,
    menu: AAMenu,
    averageRating: 3.2,
    diningExperience: "Casual",
    priceRange: "$",
    reviews: []
};

const CheesecakeFactory: Restaurant = {
    id: "26",
    name: "The Cheesecake Factory",
    description:
        "American chain restaurant offering sizable portions from a vast menu including signature cheesecake",
    image: cheesecakefactory,
    menu: CCFMenu,
    averageRating: 4.8,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Cinnabon: Restaurant = {
    id: "27",
    name: "Cinnabon",
    description:
        "Counter-serve chain serving cinnamon rolls plus other baked goods & specialty frozen beverages.",
    image: cinnabon,
    menu: CinnabonMenu,
    averageRating: 4.1,
    diningExperience: "Luxury",
    priceRange: "$",
    reviews: []
};

const FiveGuys: Restaurant = {
    id: "28",
    name: "Five Guys",
    description:
        "Fast-food chain with made-to-order burgers, fries & hot dogs, plus free peanuts while you wait.",
    image: fiveguys,
    menu: FGMenu,
    averageRating: 3.7,
    diningExperience: "Fast",
    priceRange: "$$",
    reviews: []
};

const IndianSizzler: Restaurant = {
    id: "29",
    name: "Indian Sizzler",
    description:
        "Longtime casual restaurant known for its steak, burgers & seafood, plus a salad bar.",
    image: indiansizzler,
    menu: ISMenu,
    averageRating: 3.4,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Sakura: Restaurant = {
    id: "30",
    name: "Sakura Japanese Steak, Seafood House & Sushi Bar",
    description:
        "Chain teppanyaki grill serving steaks & seafood, plus sushi & a traditional Japanese menu.",
    image: sakura,
    menu: SakuraMenu,
    averageRating: 4.1,
    diningExperience: "Luxury",
    priceRange: "$$",
    reviews: []
};

const PlayaBowls: Restaurant = {
    id: "31",
    name: "Playa Bowls",
    description:
        "Playa Bowls™ is your slice of summer, anytime. Using the freshest, highest quality ingredients, we serve healthy, delicious açaí, pitaya, coconut bowls and smoothies with sustainability and community in mind.",
    image: playabowls,
    menu: PBMenu,
    averageRating: 3.8,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Hamiltons: Restaurant = {
    id: "32",
    name: "Hamilton's on Main",
    description:
        "Approachable fine dining, craft cocktails, beer and wine served in a rustic chic setting.",
    image: hamiltons,
    menu: HamiltonsMenu,
    averageRating: 4.6,
    diningExperience: "Luxury",
    priceRange: "$$$",
    reviews: []
};

const Subway: Restaurant = {
    id: "33",
    name: "Subway",
    description:
        "Casual counter-serve chain for build-your-own sandwiches & salads, with health-conscious options.",
    image: subway,
    menu: SubwayMenu,
    averageRating: 2.8,
    diningExperience: "Casual",
    priceRange: "$",
    reviews: []
};

const DairyQueen: Restaurant = {
    id: "34",
    name: "Dairy Queen",
    description:
        "Soft-serve ice cream & signature shakes top the menu at this classic burger & fries fast-food chain.",
    image: dairyqueen,
    menu: DQMenu,
    averageRating: 2.7,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const UDairy: Restaurant = {
    id: "35",
    name: "UDairy Creamery",
    description:
        "Shop selling premium ice cream produced by University of Delaware agriculture students.",
    image: udairy,
    menu: UDairyMenu,
    averageRating: 4.8,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const JerseyMikes: Restaurant = {
    id: "36",
    name: "Jersey Mike's Subs",
    description:
        "New Jersey-based counter-serve sandwich chain serving jumbo subs filled with cold cuts & toppings.",
    image: jerseymikes,
    menu: JMMenu,
    averageRating: 4.3,
    diningExperience: "Casual",
    priceRange: "$",
    reviews: []
};

const JimmyJohns: Restaurant = {
    id: "37",
    name: "Jimmy John's",
    description:
        "Counter-serve chain specializing in sub & club sandwiches, plus signature potato chips.",
    image: jimmyjohns,
    menu: JJMenu,
    averageRating: 2.1,
    diningExperience: "Casual",
    priceRange: "$",
    reviews: []
};

const Capriottis: Restaurant = {
    id: "38",
    name: "Capriotti's Sandwich Shop",
    description:
        "Counter-service deli chain crafting hearty signature subs, salads & kids' meals in a casual setting.",
    image: capriottis,
    menu: CapriottisMenu,
    averageRating: 2.3,
    diningExperience: "Casual",
    priceRange: "$",
    reviews: []
};

const PFChangs: Restaurant = {
    id: "39",
    name: "P.F. Chang's",
    description:
        "Family-friendly chain offering creative takes on Asian fare in a striking space.",
    image: pfchangs,
    menu: PFCMenu,
    averageRating: 1.5,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const PandaExpress: Restaurant = {
    id: "40",
    name: "Panda Express",
    description:
        "Fast-food chain for Chinese standards, including some health-conscious options.",
    image: pandaexpress,
    menu: PEMenu,
    averageRating: 1.8,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const KFC: Restaurant = {
    id: "41",
    name: "KFC",
    description:
        "Restaurant chain known for its buckets of fried chicken, plus combo meals & sides.",
    image: kfc,
    menu: KFCMenu,
    averageRating: 2.7,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const BaskinRobbins: Restaurant = {
    id: "42",
    name: "Baskin-Robbins",
    description:
        "Colorful ice cream parlor chain known for its many flavors plus sorbet & yogurt.",
    image: baskinrobbins,
    menu: BRMenu,
    averageRating: 3.5,
    diningExperience: "Casual",
    priceRange: "$",
    reviews: []
};

const PokeBros: Restaurant = {
    id: "43",
    name: "Poke Bros.",
    description:
        "Fast, fresh, fit. High-quality, sushi-grade fish and farm-fresh veggies in an authentic Hawaiian poké bowl.",
    image: pokebros,
    menu: PokeMenu,
    averageRating: 3.9,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Starbucks: Restaurant = {
    id: "44",
    name: "Starbucks",
    description:
        "Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability.",
    image: starbucks,
    menu: StarbucksMenu,
    averageRating: 4.7,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Wawa: Restaurant = {
    id: "45",
    name: "Wawa",
    description:
        "Convenience store chain known for sandwiches & coffee. Many offer fuel & are open 24/7.",
    image: wawa,
    menu: WawaMenu,
    averageRating: 3.6,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const ShakeShack: Restaurant = {
    id: "46",
    name: "Shake Shack",
    description:
        "Hip, counter-serve chain for gourmet takes on fast-food classics like burgers & frozen custard.",
    image: shakeshack,
    menu: SSMenu,
    averageRating: 4.9,
    diningExperience: "Casual",
    priceRange: "$$",
    reviews: []
};

const Dominos: Restaurant = {
    id: "47",
    name: "Domino's",
    description:
        "Delivery/carryout chain offering a wide range of pizzas & a variety of other dishes & sides.",
    image: dominos,
    menu: DominosMenu,
    averageRating: 1.2,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const PapaJohns: Restaurant = {
    id: "48",
    name: "Papa John's",
    description:
        "Pizza take-out & delivery chain offering classic & specialty pizzas, plus wings, sides & desserts.",
    image: papajohns,
    menu: PJMenu,
    averageRating: 1.3,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const PizzaHut: Restaurant = {
    id: "49",
    name: "Pizza Hut",
    description:
        "Popular delivery, carry-out & dine-in chain known for pizza, wings & pasta, plus sides & desserts.",
    image: pizzahut,
    menu: PHMenu,
    averageRating: 1.8,
    diningExperience: "Fast",
    priceRange: "$",
    reviews: []
};

const Dunkin: Restaurant = {
    id: "50",
    name: "Dunkin' Donuts",
    description:
        "Long-running chain serving signature breakfast items & a variety of coffee drinks.",
    image: dunkin,
    menu: DDMenu,
    averageRating: 5.0,
    diningExperience: "Casual",
    priceRange: "$",
    reviews: []
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
    FiveGuys,
    IndianSizzler,
    Sakura,
    PlayaBowls,
    Hamiltons,
    Subway,
    DairyQueen,
    UDairy,
    JerseyMikes,
    JimmyJohns,
    Capriottis,
    PFChangs,
    PandaExpress,
    KFC,
    BaskinRobbins,
    PokeBros,
    Starbucks,
    Wawa,
    ShakeShack,
    Dominos,
    PapaJohns,
    PizzaHut,
    Dunkin
];

export default RestaurantList;
