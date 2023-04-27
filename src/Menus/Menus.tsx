import { MenuItem } from "../Interfaces";

// const : MenuItem = {
//     name: "" ,
//     description: "",
//     price: ""
// };

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

const C1: MenuItem = {
    name: "New York Strip",
    description:
        "This generous 12 oz. cut is aged longer for extra tenderness and flavor. Served with your choice of two sides. Also available in 8 oz. Thick Cut.",
    price: "$18.99"
};

const C2: MenuItem = {
    name: "Country Fried Chicken",
    description:
        "Tender, marinated chicken breast, hand-battered, golden-fried and topped with made-from-scratch cream gravy. Served with your choice of two sides.",
    price: "$21.99"
};

const C3: MenuItem = {
    name: "Pulled Pork Dinner",
    description:
        "Tender, slow-cooked BBQ pork served with toasted fresh-baked bread",
    price: "$9.99"
};

const C4: MenuItem = {
    name: "All-American Cheese Burger",
    description:
        "Our classic with American cheese, lettuce, tomato and onion served on a Texas-sized bun with steak fries and a pickle spear",
    price: "$8.99"
};

const C5: MenuItem = {
    name: "Big Ol' Brownie",
    description:
        "Chocolate brownie topped with vanilla ice cream and hot chocolate sauce",
    price: "$5.99"
};

export const TRMenu: MenuItem[] = [C1, C2, C3, C4, C5];

const D1: MenuItem = {
    name: "Spring Roll",
    description:
        "A blend of fresh cabbage, carrots, and onions with a hint of seasoning, wrapped in a deliciously flaky and crispy spring wrap.",
    price: "$2.60"
};

const D2: MenuItem = {
    name: "Shrimp Fried Rice",
    description:
        "Classic shrimp fried rice with fresh shrimp, rice, green onions, peas, carrots, and sesame oil.",
    price: "$11.75"
};

const D3: MenuItem = {
    name: "Chicken Lo Mein",
    description:
        "Steamed white meat chicken, noodles, bean sprouts, carrots, red bell peppers, shitake mushrooms, scallions, and garlic. Tossed in a savory soy sauce.",
    price: "$10.75"
};

const D4: MenuItem = {
    name: "Egg Drop Soup",
    description:
        "A chicken broth based Chinese soup often thickened with cornstarch and seasoned with soy sauce, ginger, and green onions. A beaten egg is stirred in the hot soup and makes the soup thick.",
    price: "$2.50 (s) or $4.50 (l)"
};

const D5: MenuItem = {
    name: "Beef w/ Broccoli",
    description:
        "You'll enjoy marinated beef and crisp broccoli drizzled with savory garlic soy sauce.",
    price: "$15.75"
};

export const TWMenu: MenuItem[] = [D1, D2, D3, D4, D5];

const E1: MenuItem = {
    name: "Crispy Chicken Crispers",
    description:
        "Served with fries, corn on the cob and choice of honey-mustard, BBQ sauce or house-made ranch.",
    price: "$11.29"
};

const E2: MenuItem = {
    name: "Boneless Wings",
    description:
        "Hand-tossed in choice of sauce: House BBQ, Buffalo OR Honey-Chipotle. Served with dipping sauce.",
    price: "$10.69"
};

const E3: MenuItem = {
    name: "Spicy Shrimp Tacos",
    description:
        "Three spicy chile-lime shrimp tacos in flour tortillas with pico, avocado, cilantro, coleslaw, queso fresco. Served with Mexican rice & black beans.",
    price: "$10.99"
};

const E4: MenuItem = {
    name: "Big Mouth Crispy Chicken Sandwich",
    description:
        "Hand-breaded crispy chicken, lettuce, tomato, and our secret sauce on a brioche bun.",
    price: "$9.99"
};

const E5: MenuItem = {
    name: "Molten Chocolate Cake",
    description:
        "Chocolate cake with a molten chocolate center, topped with vanilla ice cream in a chocolate shell.",
    price: "$7.29"
};

export const ChilisMenu: MenuItem[] = [E1, E2, E3, E4, E5];

const F1: MenuItem = {
    name: "Chicken Parmigiana",
    description:
        "Two lightly fried parmesan-breaded chicken breasts with our homemade marinara and melted Italian cheeses. Served with a side of spaghetti.",
    price: "$19.49"
};

const F2: MenuItem = {
    name: "Seafood Alfredo",
    description:
        "Creamy, alfredo sauce made from scratch with ingredients like parmesan, cream, garlic and butter, tossed with fettuccine, sautéed shrimp and scallops.",
    price: "$21.29"
};

const F3: MenuItem = {
    name: "Lasagna Classico",
    description:
        "Prepared fresh daily with layers of pasta, parmesan, mozzarella, pecorino romano and our homemade meat sauce.",
    price: "$17.79"
};

const F4: MenuItem = {
    name: "Breadsticks (V)",
    description: "Enjoy a freshly-baked, Olive Garden Favorite.",
    price: "$4.49"
};

const F5: MenuItem = {
    name: "Warm Italian Doughnuts (V)",
    description:
        "Fried doughnuts tossed in vanilla sugar. Served with raspberry or chocolate sauce.",
    price: "$8.29"
};

export const OGMenu: MenuItem[] = [F1, F2, F3, F4, F5];

const G1: MenuItem = {
    name: "The Box Combo",
    description:
        "4 Chicken Fingers, Crinkle-Cut Fries, 1 Cane's Sauce, Texas Toast, Coleslaw, Regular Fountain Drink/Tea",
    price: "$11.39"
};

const G2: MenuItem = {
    name: "The 3 Finger Combo",
    description:
        "3 Chicken Fingers, Crinkle-Cut Fries, One Cane's Sauce, Texas Toast, Regular Fountain Drink/Tea",
    price: "$9.79"
};

const G3: MenuItem = {
    name: "The Caniac Combo",
    description:
        "6 Chicken Fingers, Crinkle-Cut Fries, Two Cane's Sauces, Texas Toast, Coleslaw, Large Fountain Drink/Tea",
    price: "$16.35"
};

const G4: MenuItem = {
    name: "The Sandwich Combo",
    description:
        "3 Chicken Fingers, Cane's Sauce, Lettuce, Toasted Bun, Crinkle-Cut Fries, Regular Fountain Drink/Tea",
    price: "$9.99"
};

const G5: MenuItem = {
    name: "The Kids Combo",
    description:
        "2 Chicken Fingers, Crinkle-Cut Fries, One Cane's Sauce, Kid's Size Drink",
    price: "$6.49"
};

export const RCMenu: MenuItem[] = [G1, G2, G3, G4, G5];

const H1: MenuItem = {
    name: "Surf & Turf Walt's Favorite Shrimp & 6 oz. Filet Mignon",
    description:
        "Hand-breaded, butterflied and lightly fried shrimp paired with a tender 6 oz filet mignon. Served with cocktail sauce and your choice of two sides.",
    price: "$36.28"
};

const H2: MenuItem = {
    name: "Lobster Bisque - Bowl",
    description: "Creamy, savory lobster bisque served with crackers.",
    price: "$9.49"
};

const H3: MenuItem = {
    name: "Mozzarella Cheesesticks",
    description: "Served with marinara.",
    price: "$9.99"
};

const H4: MenuItem = {
    name: "Classic Maine Lobster Tail",
    description: "Served with lemon and melted butter.",
    price: "$18.99"
};

const H5: MenuItem = {
    name: "Brownie Overboard",
    description:
        "Warm brownie wedges served with a scoop of vanilla ice cream. Topped with caramel, fudge and whipped cream.",
    price: "$9.49"
};

export const RLMenu: MenuItem[] = [H1, H2, H3, H4, H5];
