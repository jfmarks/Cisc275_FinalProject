import { MenuItem } from "../Interfaces";

// const MI5: MenuItem = {
//     name: "" ,
//     description: "",
//     price:
// }

const A1: MenuItem = {
    name: "Oriental Chicken Salad",
    description:
        "A long-running favorite, crispy breaded chicken tenders top a bed of Asian greens, rice noodles and almonds with our Oriental vinaigrette on the side. Served with a golden brown signature breadstick brushed with a buttery blend of garlic and parsley.",
    price: "$10.49"
};

const A2: MenuItem = {
    name: "Fiesta Lime Chicken",
    description:
        "A celebration of flavor, this dish delivers on every level. Grilled chicken glazed with zesty lime sauce and drizzled with tangy Mexi-ranch is smothered with a rich blend of Cheddar cheeses on a bed of crispy tortilla strips. Served with Spanish rice and house-made pico de gallo.",
    price: "$11.99"
};

const A3: MenuItem = {
    name: "Bourbon Street Steak",
    description:
        "Big flavor from New Orleans. A grilled 8 oz. USDA Select top sirloin* is jazzed up with Cajun spices and garlic butter served sizzling on a cast iron platter with sautéed mushrooms and onions. Served with garlic mashed potatoes.",
    price: "$15.29"
};

const A4: MenuItem = {
    name: "Four Cheese Mac + Cheese with Honey Pepper Chicken Tenders",
    description:
        "A sweet and savory take on comfort food, four-cheese penne mac & cheese is topped with Applewood-smoked bacon and crispy chicken tenders tossed in honey pepper sauce.",
    price: "$12.49"
};

const A5: MenuItem = {
    name: "Classic Burger",
    description:
        "A juicy all-beef burger classic with lettuce, tomato, onion and pickles on a Brioche bun. Served with classic fries.",
    price: "$8.99"
};

export const ABMenu: MenuItem[] = [A1, A2, A3, A4, A5];

const B1: MenuItem = {
    name: "Burrito",
    description:
        "Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.",
    price: "$10.20+"
};

const B2: MenuItem = {
    name: "Quesadilla",
    description:
        "Cheese in a Flour Tortilla with your choice of meat, sofritas or fajita veggies and three included sides.",
    price: "$10.90"
};

const B3: MenuItem = {
    name: "Salad",
    description:
        "Your choice of meat or sofritas served with our fresh supergreens lettuce blend made of Romaine, Baby Kale, and Baby Spinach. Add beans, queso blanco, salsa, guacamole, sour cream or cheese and top it off with our signature Chipotle-Honey Vinaigrette.",
    price: "$10.20+"
};

const B4: MenuItem = {
    name: "High Protein Bowl",
    description:
        "White Rice, Black Beans, Double Chicken, Red Chili Salsa, Cheese, and Shredded Romaine Lettuce",
    price: "$13.85"
};

const B5: MenuItem = {
    name: "Veggie Full Bowl",
    description:
        "White Rice, Black Beans, Fajita Veggies, Fresh Tomato Salsa, Roasted Chili-Corn Salsa, and Guacamole",
    price: "$10.20+"
};

export const ChipotleMenu: MenuItem[] = [B1, B2, B3, B4, B5];
