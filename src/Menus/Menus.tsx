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

const I1: MenuItem = {
    name: "OMG Crabby Pretzel",
    description:
        "A warm Bavarian style pretzel as big as your head, topped with crab dip, cheese, Old Bay and baked till yummy.",
    price: "$17.50"
};

const I2: MenuItem = {
    name: "Grain Burger",
    description:
        "Beef, BBQ sauce, UDairy Gold cheese, applewood-smoked bacon, lettuce, tomato, red onion.",
    price: "$15.00"
};

const I3: MenuItem = {
    name: "Chicken Caesar",
    description:
        "Grilled chicken, chopped romaine, house-made Caesar dressing, shaved parm and croutons.",
    price: "$15.25"
};

const I4: MenuItem = {
    name: "Asian Street Noodles",
    description: "Sautéed shrimp and asian vegetables, noodles and spicy oil.",
    price: "$18.00"
};

const I5: MenuItem = {
    name: "Salmon BLT",
    description:
        "Grilled fresh salmon, applewood-smoked bacon, lettuce, tomato and cilantro aioli on toasted multi-GRAIN bread.",
    price: "$17.50"
};

export const GrainMenu: MenuItem[] = [I1, I2, I3, I4, I5];

const J1: MenuItem = {
    name: "Bavarian Pretzel Sticks",
    description:
        "Homestead Farmhouse Ale cheese sauce, Philly Phavorite IPA mustard",
    price: "$6.50"
};

const J2: MenuItem = {
    name: "Seasame Chicken Salad",
    description:
        "Romaine, red cabbage, grilled peppers, mandarian oranges, carrots, almonds, scallion, crispy wonton strips, seasame soy vinaigrette",
    price: "$16.50"
};

const J3: MenuItem = {
    name: "Asian Salmon Burger",
    description:
        "Fried nori, pickled vegetables, cucumber, pickled ginger, wasabi soy mayonnaise, potato roll",
    price: "$15.95"
};

const J4: MenuItem = {
    name: "Margherita Pizza",
    description: "Tomato sauce, fresh mazzorella, pecorino romano, basil",
    price: "$15.75"
};

const J5: MenuItem = {
    name: "Baja-Style Fish Tacos",
    description:
        "Iron Hill beer-battered cod, red cabbage slaw, pickled onion, pico de gallo, chipotle aioli, cilantro",
    price: "$15.95"
};

export const IHMenu: MenuItem[] = [J1, J2, J3, J4, J5];

const K1: MenuItem = {
    name: "House Salad",
    description:
        "A classic house salad featuring crisp lettuce, tomatoes, croutons, cheese, and cucumbers.",
    price: "$11.00"
};

const K2: MenuItem = {
    name: "Adobo Grilled Chicken Burrito",
    description:
        "Abodo grilled chicken, avocado ranch sauce, lettuce, tomatoes, and real shredded cheddar cheese wrapped inside a warm flour tortilla.",
    price: "$11.50"
};

const K3: MenuItem = {
    name: "Cheese Quesadillas",
    description:
        "A simple flour tortilla, a hefty portion of melted three-cheese blend, and creamy jalapeño sauce",
    price: "$11.00"
};

const K4: MenuItem = {
    name: "Chips & Queso",
    description:
        "Our crispy tortilla chips are freshly fried and paired with melty queso, crafted from the perfect blend of peppers and cheese.",
    price: "$4.00"
};

const K5: MenuItem = {
    name: "Coco Rojo Brownie",
    description:
        "A light and fluffy dessert that is a cross between a brownie and a cookie.",
    price: "$2.50"
};

export const EDMenu: MenuItem[] = [K1, K2, K3, K4, K5];

const L1: MenuItem = {
    name: "Nashville Hot Chicken Tots",
    description:
        "Garlic chicken, Nashville hot sauce, spicy pickles, malt vinegar aioli",
    price: "$12.00"
};

const L2: MenuItem = {
    name: "Short Rib Cheesestake",
    description:
        "Brown ale braised short rib with caramelized onions, dijonnaise, and beer cheese fondue",
    price: "$21.00"
};

const L3: MenuItem = {
    name: "High 5 Burger",
    description:
        "A tower of two angus beef patties, garlic chicken breast, short rib, smokehouse bacon, fried onions, fried cheese curds, lettuce, tomato, and sweet & spicy pickles. Comes with a free t-shirt... but only if you fnish everything on your plate!",
    price: "$32.00"
};

const L4: MenuItem = {
    name: "Buffalo Shrimp Taco",
    description:
        "Yuengling beer battered shrimp, bufalo sauce, crumbled bleu cheese, and buttermilk dressing over heritage greens",
    price: "$16.00"
};

const L5: MenuItem = {
    name: "Sambal Chicken Fingers",
    description:
        "Sambal chicken tenders, sesame, Stone Balloon boom sauce, served with fries",
    price: "$12.00"
};

export const SBMenu: MenuItem[] = [L1, L2, L3, L4, L5];

const M1: MenuItem = {
    name: "Tex Mex Chili",
    description:
        "Crowd favorite topped with monterey jack cheddar cheese & scallions",
    price: "$6.00"
};

const M2: MenuItem = {
    name: "The Whole Shebang",
    description:
        "Cheesesteak egg rolls, bavarian pretzels, mozzarella sticks & chicken quesadillas Great for Sharing!",
    price: "$20.00"
};

const M3: MenuItem = {
    name: "Sweet and Spicy Wrap",
    description:
        "Crispy fried chicken tossed with sweet and spicy sauce, along with avocado, cucumber, carrots, mixed greens and almond slices, in a flour tortilla",
    price: "$15.00"
};

const M4: MenuItem = {
    name: "Main Street Burger",
    description:
        "½ lb burger topped with crispy bacon and cheddar cheese, on a burger bun",
    price: "$14.00"
};

const M5: MenuItem = {
    name: "Chocolate Torte",
    description:
        "Rich and delicious flourless chocolate torte made with dark cocoa",
    price: "$6.00"
};

export const KatesMenu: MenuItem[] = [M1, M2, M3, M4, M5];

const N1: MenuItem = {
    name: "Hummus Platter",
    description:
        "Creamy garlic, lemon hummus served with grilled pita bread, feta cheese, Kalamata olives and capers.",
    price: "$11.99"
};

const N2: MenuItem = {
    name: "Meat Lovers Pizza",
    description: "House sauce, mozzarella cheese, pepperoni, bacon & sausage",
    price: "$16.49"
};

const N3: MenuItem = {
    name: "Apple Walnut Salad",
    description:
        "Greens, Cabot cheddar, sliced apples, candied walnuts, apple cider vinaigrette",
    price: "$11.99"
};

const N4: MenuItem = {
    name: "Jambalaya",
    description:
        "Chicken, shrimp, Andouille sausage, peppers, onions over dirty rice with cornbread",
    price: "$21.99"
};

const N5: MenuItem = {
    name: "Hot Fudge Brownie Sundae",
    description: "Made with Woodside Farm ice cream.",
    price: "$6.99"
};

export const DPMenu: MenuItem[] = [N1, N2, N3, N4, N5];

const O1: MenuItem = {
    name: "Bruschetta",
    description:
        "Fresh marinated tomatoes, basil, garlic, onions and extra virgin olive oil, served with homemade garlic parmesan flatbread",
    price: "$11.99"
};

const O2: MenuItem = {
    name: "The Mama Grotto",
    description:
        "Our old family style recipe - layered with a hearty tomato sauce, topped with cheese and freshly chopped basil",
    price: "$18.99"
};

const O3: MenuItem = {
    name: "Cheesesteak Boli",
    description: "Thinly sliced ribeye steak chopped philly style and cheese",
    price: "$12.99"
};

const O4: MenuItem = {
    name: "Chicken Parmesan and Pasta",
    description: "Tender chicken breast topped with a blend of cheeses",
    price: "$18.99"
};

const O5: MenuItem = {
    name: "Cheesy Chicken Cheesesteak",
    description:
        "Philly style chopped all-white chicken with provolone, cheddar and american",
    price: "$10.49"
};

export const GrottosMenu: MenuItem[] = [O1, O2, O3, O4, O5];

const P1: MenuItem = {
    name: "Egg McMuffin",
    description:
        "McDonald's Egg McMuffin® recipe features a freshly cracked Grade A egg placed on a toasted English Muffin topped with real butter, lean Canadian bacon, and melty American cheese.",
    price: "$2.79"
};

const P2: MenuItem = {
    name: "Big Mac",
    description:
        "The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
    price: "$3.99"
};

const P3: MenuItem = {
    name: "10 Piece Chicken McNuggets",
    description:
        "Our tender, juicy Chicken McNuggets® are made with all white meat chicken and no artificial colors, flavors or preservatives.",
    price: "$4.49"
};

const P4: MenuItem = {
    name: "World Famous Fries",
    description:
        "McDonald's World Famous Fries® are made with premium potatoes such as the Russet Burbank and the Shepody. With 0g of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside.",
    price: "$1.79"
};

const P5: MenuItem = {
    name: "McFlurry with Oreo Cookies",
    description:
        "The McDonald's McFlurry with OREO Cookies is a popular combination of creamy vanilla soft serve with crunchy pieces of OREO cookies!",
    price: "$3.39"
};

export const McMenu: MenuItem[] = [P1, P2, P3, P4, P5];

const Q1: MenuItem = {
    name: "Baconator",
    description:
        "A half-pound of fresh beef, American cheese, 6 pieces of crispy Applewood smoked bacon, ketchup, and mayo. Carnivores rejoice!",
    price: "$6.09"
};

const Q2: MenuItem = {
    name: "10 Piece Chicken Nuggets",
    description:
        "100% white-meat chicken breaded to crispy perfection and served with your choice of 6 dipping sauces including Buttermilk Ranch, BBQ, Sweet & Sour, Honey Mustard, or Ghost Pepper Ranch. They're trending in our restaurants and Twitter feed alike.",
    price: "$5.99"
};

const Q3: MenuItem = {
    name: "Chili Cheese Fries",
    description:
        "Our natural-cut, skin-on, sea-salted fries topped with our hearty chili and rich, creamy cheese sauce. Easy to love. Hard to beat.",
    price: "$4.87"
};

const Q4: MenuItem = {
    name: "Honey Butter Biscuit",
    description:
        "Fluffy buttermilk biscuit spread with maple honey butter. The kind of down-home breakfast that melts in your mouth and makes you reminisce about the farm, even if you're from the city.",
    price: "$1.20"
};

const Q5: MenuItem = {
    name: "Classic Chocolate Frosty",
    description:
        "The Chocolate Frosty was born out of Dave's desire for a signature dessert to go with his vision of the perfect meal. Thick enough to use a spoon, smooth enough to use a straw, and perfect when enjoyed on the end of a fry.",
    price: "$1.99"
};

export const WendysMenu: MenuItem[] = [Q1, Q2, Q3, Q4, Q5];

const R1: MenuItem = {
    name: "Hash Brown Scramble Burrito w/ Nuggets",
    description:
        "A hearty morning meal of sliced Chick-fil-A Nuggets, crispy Hash Browns, scrambled eggs and a blend of Monterey Jack and Cheddar cheeses. Made fresh each morning. Rolled in a warm flour tortilla. Served with Jalapeño Salsa.",
    price: "$8.39"
};

const R2: MenuItem = {
    name: "Chick-fil-A Chicken Sandwich",
    description:
        "A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips. Also available on a multigrain bun.",
    price: "$8.79"
};

const R3: MenuItem = {
    name: "Mac & Cheese",
    description:
        "A classic macaroni and cheese recipe featuring a special blend of cheeses including Parmesan, Cheddar, and Romano. Baked in-restaurant to form a crispy top layer of baked cheese.",
    price: "$6.79"
};

const R4: MenuItem = {
    name: "Spicy Southwest Salad",
    description:
        "Slices of grilled spicy chicken breast served on a fresh bed of mixed greens, topped with grape tomatoes, a blend of Monterey Jack and Cheddar cheeses, and a zesty combination of roasted corn, black beans, poblano chiles, and red bell peppers. Prepared fresh daily. Served with Seasoned Tortilla Strips and Chili Lime Pepitas. Pairs well with Creamy Salsa dressing.",
    price: "$14.39"
};

const R5: MenuItem = {
    name: "Chocolate Chunk Cookie",
    description:
        "Cookies have both semi-sweet dark and milk chocolate chunks, along with wholesome oats.",
    price: "$2.79"
};

export const CFAMenu: MenuItem[] = [R1, R2, R3, R4, R5];

const S1: MenuItem = {
    name: "Breakfast Crunchwrap Sausage",
    description:
        "A crispy hash brown, fluffy eggs, sausage patty, cheddar cheese, and creamy jalapeño sauce wrapped inside a warm flour tortilla and grilled to go.",
    price: "$3.59"
};

const S2: MenuItem = {
    name: "Chalupa Supreme",
    description:
        "The Chalupa Supreme sure weaves some beautiful witchcraft. Take a traditional flatbread, something already awesome in its own right, and fry it. Suddenly you have a shell that mysteriously marries chewy and crispy; pure sorcery. Add seasoned beef, a three-cheese blend, lettuce, tomatoes, and reduced fat sour cream, and you get a Dante-esque culinary anomaly. The only greater fried magic trick known to man is turning arbitrary dough splashes, into funnel cake. Now that is nothing short of a miracle.",
    price: "$3.99"
};

const S3: MenuItem = {
    name: "Beefy 5-Layer Burrito",
    description:
        "Sorry, lettuce, RSVP is closed. No, I get it, your friend Seasoned Beef is DJing tonight. But unless you're on the list, you can't get in. Oh, you're a personal friend of the promoters Beans and Cheese? Well, how about you give them a call, let them know you're out here in line, and maybe I can let you in. Oh, you don't have their number? I see, so now your dad owns the club, huh? Well, the owner Reduced Fat Sour Cream is coming down now, so I'm sure he'll take you, his child, straight to the VIP lounge where you belong huh? Sir? Oh, you don't know this guy? That's what I thought. Hey Nacho Cheese Sauce! Get this lettuce character out of my sight; I don't want him anywhere near the door to this burrito.",
    price: "$3.39"
};

const S4: MenuItem = {
    name: "Nacho Fries",
    description:
        "Golden, crisp Nacho Fries seasoned with bold Mexican spices and nacho cheese sauce for dipping.",
    price: "$1.99"
};

const S5: MenuItem = {
    name: "Cinnabon Delights 12 Pack",
    description:
        "Sorry to tell you, buddy, but you've been had. Cinnabon Delights® are a thing. And they can play some serious mind games. You thought you were eating breakfast, but then you put this thing in your mouth and WOAH, cinnamon spheres filled with icing is obviously dessert, not breakfast.",
    price: "$6.39"
};

export const TBMenu: MenuItem[] = [S1, S2, S3, S4, S5];

const T1: MenuItem = {
    name: "10 Boneless Wings",
    description:
        "Juicy All-White Chicken / Lightly Breaded / Handspun in Choice of Sauce or Dry Seasoning",
    price: "$13.49"
};

const T2: MenuItem = {
    name: "2 Loaded Bird Dawgs + Fries",
    description:
        "Hand-Breaded Chicken Tenders / Wild Honey Mustard / Grilled Onions / New Belgium Fat Tire® Beer Cheese / Green Onions / Brioche Buns / Includes 2 Dawgs / Natural-Cut French Fries",
    price: "$12.99"
};

const T3: MenuItem = {
    name: "All-American Cheeseburger",
    description:
        "Double Patty / Hand-Smashed / Sea Salt / Coarse Black Pepper / American Cheese / Shredded Iceberg Lettuce / Tomato / Pickles / Mustard / Mayo / Challah Bun / Natural-Cut French Fries",
    price: "$13.79"
};

const T4: MenuItem = {
    name: "Street Tacos, Chips & Salsa",
    description:
        "Pulled Chicken / Parmesan Garlic / House-Made Pico de Gallo / Southwestern Ranch / Cilantro / Flour Tortillas / House-Made Tortilla Chips & Salsa",
    price: "$13.49"
};

const T5: MenuItem = {
    name: "Chocolate Fudge Cake",
    description: "Chocolate Fudge Cake / Chocolate Sauce / Vanilla Ice Cream",
    price: "$7.49"
};

export const BWWMenu: MenuItem[] = [T1, T2, T3, T4, T5];

const U1: MenuItem = {
    name: "Jerk-Fu Tacos",
    description:
        "caribbean spiced tofu, vegan coconut curry mayo, shredded lettuce, pickled jalapeno, mango pico de gallo, jicama wrap",
    price: "$13.95"
};

const U2: MenuItem = {
    name: "Two Stone Fruits Salad",
    description:
        "baby arugula, dark cherries, spanish olives, red onion, grape tomato, toasted almonds, sorrel, pink peppercorn vinaigrette",
    price: "$15.95"
};

const U3: MenuItem = {
    name: "Blackend Salmon",
    description:
        "cajun spice, creamed hominy, cornbread stuffing, pickled tomatillo salsa, jalapeno-maple gastrique, scallions",
    price: "$24.95"
};

const U4: MenuItem = {
    name: "Peebee & Jay Burger",
    description: "pork belly, peanut butter, strawberry jam, arugula, brioche",
    price: "$18.95"
};

const U5: MenuItem = {
    name: "Grilled Organic Chicken BLT",
    description:
        "bacon, lettuce, tomato, onion, cheddar, avocado-lime aioli, brioche",
    price: "$15.95"
};

export const TSMenu: MenuItem[] = [U1, U2, U3, U4, U5];

const V1: MenuItem = {
    name: "Onion Rings",
    description: "A generous portion, perfectly seasoned and prepared.",
    price: "$5.49"
};

const V2: MenuItem = {
    name: "Claymont Cheesesteak",
    description:
        "The Classic Philly-Styled Thinly Sliced Premium Rib-Eye Steak and American Cheese.",
    price: "$8.49"
};

const V3: MenuItem = {
    name: "Cheese Stromboli",
    description: "Pizza Sauce And Mozzarella.",
    price: "$10.49"
};

const V4: MenuItem = {
    name: "Turkey Club",
    description:
        "Potato Chips, Side Pickles, American, Lettuce, Tomato, Mayo, Bacon and Turkey.",
    price: "$10.99"
};

const V5: MenuItem = {
    name: "Chocolate Pudding",
    description: "Topped with Whipped Cream",
    price: "$5.25"
};

export const ClaymontMenu: MenuItem[] = [V1, V2, V3, V4, V5];

const W1: MenuItem = {
    name: "Whopper",
    description:
        "A ¼ lb of flame-grilled beef patty topped with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun.",
    price: "$6.59"
};

const W2: MenuItem = {
    name: "BK Royal Crispy Chicken",
    description:
        "Crispy white meat breast fillet topped with royal sauce, lettuce and juicy tomatoes on a toasted potato bun.",
    price: "$5.99"
};

const W3: MenuItem = {
    name: "8 Piece Chicken Nuggets",
    description:
        "Bite-sized white meat chicken coated in crispy homestyle seasoned breading.",
    price: "$2.49"
};

const W4: MenuItem = {
    name: "4 Piece Mozzarella Sticks",
    description: "Perfectly matched with a marinara dipping sauce.",
    price: "$1.99"
};

const W5: MenuItem = {
    name: "Hershey's Sundae Pie",
    description:
        "A crunchy chocolate crust filled with chocolate crème filling and garnished with real Hershey's Chocolate Chips.",
    price: "$2.29"
};

export const BKMenu: MenuItem[] = [W1, W2, W3, W4, W5];

const X1: MenuItem = {
    name: "Fish & Chicken Meal",
    description:
        "1 piece of wild-caught Alaska Pollock and 2 pieces of all-white meat Chicken, hand-battered in our signature batter, served with 2 Sides, and 2 Hushpuppies.",
    price: "$10.79"
};

const X2: MenuItem = {
    name: "Grilled Salmon Meal",
    description:
        "1 piece of Grilled Salmon served on a bed of rice with 2 sides.",
    price: "$11.69"
};

const X3: MenuItem = {
    name: "Rice Bowls",
    description:
        "Customize your rice bowl with your choice of grilled salmon or grilled shrimp and one of our signature toppings.",
    price: "$9.69"
};

const X4: MenuItem = {
    name: "2 Tacos",
    description:
        "Customize your tacos with your choice of grilled salmon or grilled shrimp and one of our signature toppings.",
    price: "$7.59"
};

const X5: MenuItem = {
    name: "Chocolate Cream Pie",
    description:
        "Our chocolate creme pie is the bounty of choice for buccaneers and landlubbers alike.",
    price: "$3.29"
};

export const LJSMenu: MenuItem[] = [X1, X2, X3, X4, X5];

const Y1: MenuItem = {
    name: "Original Pretzel",
    description:
        "Every single pretzel is an original, and freshly baked to raise the standard of snacking. It's the pretzel that started it all — made from five simple, fresh ingredients. Pick a pretzel up — it's sure to return the favor!",
    price: "$3.99"
};

const Y2: MenuItem = {
    name: "Cinnamon Sugar Pretzel",
    description:
        "A soft Cinnamon Sugar Pretzel will satisfy any spirit. It's hot from the oven, sprinkled with fresh cinnamon, sweet sugar and handed right over.",
    price: "$3.99"
};

const Y3: MenuItem = {
    name: "Pepperoni Pretzel Nuggets",
    description:
        "The Pepperoni Pretzel you know and love is now bite-size! Each nugget is topped with a slice of pepperoni and a sprinkle of three-cheese blend.",
    price: "$6.49"
};

const Y4: MenuItem = {
    name: "Cheese Pretzel Dog",
    description:
        "An Auntie Anne's Pretzel wrapped around a Nathan's Famous hot dog, topped with a simple three-cheese blend, is perfectly rewarding.",
    price: "$4.69"
};

const Y5: MenuItem = {
    name: "Cheese Dip",
    description:
        "This is the cheese that's sure to please any pretzel or pretzel dog. Simply cheesy and delicious.",
    price: "$0.99"
};

export const AAMenu: MenuItem[] = [Y1, Y2, Y3, Y4, Y5];

const Z1: MenuItem = {
    name: "Roadside Sliders",
    description:
        "Bite-Sized Burgers on Mini-Buns Served with Grilled Onions, Pickles and Ketchup",
    price: "$9.95"
};

const Z2: MenuItem = {
    name: "Bee Sting Flatbread Pizza",
    description:
        "Italian Sausage, Pepperoni, Bacon and Calabrian Chiles with Mozzarella, Parmesan and Honey",
    price: "$14.50"
};

const Z3: MenuItem = {
    name: "Hibachi Steak",
    description:
        "Hanger Steak with Shiitake Mushrooms, Onions, Bean Sprouts, Wasabi Mashed Potatoes and Vegetables",
    price: "$27.50"
};

const Z4: MenuItem = {
    name: "Shepherd's Pie",
    description:
        "Ground Beef, Carrots, Peas, Zucchini and Onions in a Delicious Mushroom Gravy Covered with a Mashed Potato-Parmesan Cheese Crust",
    price: "$19.95"
};

const Z5: MenuItem = {
    name: "Chocolate Tower Truffle Cake",
    description:
        "Layers and Layers of Fudge Cake with Chocolate Truffle Cream and Chocolate Mousse",
    price: "$10.50"
};

export const CCFMenu: MenuItem[] = [Z1, Z2, Z3, Z4, Z5];

const AA1: MenuItem = {
    name: "Cinnabon Classic Roll",
    description:
        "Our world-famous cinnamon roll is made with a combination of warm dough, legendary Makara cinnamon, and signature cream cheese for a freshly baked, irresistible sweet treat.",
    price: "$3.76"
};

const AA2: MenuItem = {
    name: "Caramel PecanBon",
    description:
        "Our signature Classic Roll, topped with decadent caramel frosting and pecans for the perfect crunch.",
    price: "$4.71"
};

const AA3: MenuItem = {
    name: "Churro Swirl",
    description:
        "Our spin on the classic beloved snack, baked to perfection and topped with our world-famous Makara cinnamon and sugar. Add a cup of our signature cream cheese frosting for a truly irresistible treat.",
    price: "$2.49"
};

const AA4: MenuItem = {
    name: "Center of the Roll",
    description:
        "The ooey-gooey center of the Cinnabon universe. Available in Classic and Caramel PecanBon flavors, this is the definition of a perfect treat.",
    price: "$3.30"
};

const AA5: MenuItem = {
    name: "OREO Cookies & Cream Chillatta",
    description:
        "Cookies and milk, all grown up and perfectly blended into a sweet frozen treat.",
    price: "$4.71"
};

export const CinnabonMenu: MenuItem[] = [AA1, AA2, AA3, AA4, AA5];

const BB1: MenuItem = {
    name: "Cheeseburger",
    description:
        "American-style cheese melted between fresh patties and placed on a soft, toasted sesame seed bun. Choose as many toppings as you want.",
    price: "$10.60"
};

const BB2: MenuItem = {
    name: "Cheese Dog",
    description:
        "All-beef hot dog, split and grilled lengthwise for a caramelized exterior with a layer of American-style cheese on top and any of your favorite toppings.",
    price: "$7.60"
};

const BB3: MenuItem = {
    name: "Grilled Cheese",
    description:
        "Slices of American-style cheese melted on an inside-out sesame seed bun with toppings of your choice and grilled until golden brown.",
    price: "$5.70"
};

const BB4: MenuItem = {
    name: "Five Guys Style Fries",
    description:
        "Freshly made boardwalk-style fries, cooked in pure, cholesterol-free, 100% peanut oil. Cut fresh and cooked twice - firm on the outside and mashed potato on the inside.",
    price: "$5.70"
};

const BB5: MenuItem = {
    name: "Chocolate Milkshake",
    description: "Chocolate and fudge added to your handspun milkshake.",
    price: "$5.90"
};

export const FGMenu: MenuItem[] = [BB1, BB2, BB3, BB4, BB5];

const CC1: MenuItem = {
    name: "Chicken Pakoras",
    description: "Boneless Chicken Fritters battered with Chick  Peas & Flour",
    price: "$5.99"
};

const CC2: MenuItem = {
    name: "Naan",
    description: "Fresh Indian Bread Make with Flour, Baked in the Clay Oven",
    price: "$2.99"
};

const CC3: MenuItem = {
    name: "Tandoori Chicken",
    description:
        "Half Chicken Marinated in Fresh Spices with Yogurt & Roasted in the Indian traditional Clay Oven - Served Sizzling Hot",
    price: "$17.99"
};

const CC4: MenuItem = {
    name: "Lamb Biryani",
    description: "Cubes of Lamb Cooked with Basmati Rice, Nuts & Almonds",
    price: "$16.99"
};

const CC5: MenuItem = {
    name: "Gulab Jamun",
    description: "Milk puffs Deep Fried & Soaked in a Special Syrup",
    price: "$3.99"
};

export const ISMenu: MenuItem[] = [CC1, CC2, CC3, CC4, CC5];

const DD1: MenuItem = {
    name: "",
    description: "",
    price: ""
};

const DD2: MenuItem = {
    name: "",
    description: "",
    price: ""
};

const DD3: MenuItem = {
    name: "",
    description: "",
    price: ""
};

const DD4: MenuItem = {
    name: "",
    description: "",
    price: ""
};

const DD5: MenuItem = {
    name: "",
    description: "",
    price: ""
};

export const SakuraMenu: MenuItem[] = [DD1, DD2, DD3, DD4, DD5];

const EE1: MenuItem = {
    name: "Nutella- Acai Bowl",
    description:
        "Playa Acai topped with granola, strawberry, banana, nutella, and coconut flakes",
    price: "$14.00"
};

const EE2: MenuItem = {
    name: "Pura Vida- Acai Bowl",
    description:
        "Playa Acai topped with granola, strawberry, blueberry, and honey",
    price: "$13.00"
};

const EE3: MenuItem = {
    name: "Stupid Cupid- Special Bowl",
    description:
        "Stupid cupid blend (strawberry, banana, coconut milk) topped with granola, strawberry, cacao nibs, coconut flakes, nutella and white chocolate",
    price: "$14.00"
};

const EE4: MenuItem = {
    name: "Strawberry Banana Smoothie 16oz",
    description: "Strawberry, banana, and coconut milk",
    price: "$9.99"
};

const EE5: MenuItem = {
    name: "Kowabunga Smoothie 16oz",
    description: "Strawberry, banana, blueberry, and coconut milk",
    price: "$9.99"
};

export const PBMenu: MenuItem[] = [EE1, EE2, EE3, EE4, EE5];

const FF1: MenuItem = {
    name: "Whipped Ricotta w/ Focaccia",
    description:
        "fresh roasted tomato-herb focaccia, cracked black pepper, toasted pinenuts, local honey, and confit tomatoes",
    price: "$15.00"
};

const FF2: MenuItem = {
    name: "Hamilton's Burger",
    description:
        "8oz angus beef, savory bacon jam, gorgonzola, baby arugula, garlic aioli, fries, truffle ketchup",
    price: "$20.00"
};

const FF3: MenuItem = {
    name: "Seafood Newburg",
    description:
        "canadian lobster, lump crab, sea scallops, shrimp, sherry cream sauce, puff pastry, grilled asparagus",
    price: "$38.00"
};

const FF4: MenuItem = {
    name: "8 oz. Filet Mignon",
    description:
        "Enhanced by a blend of marbling and mellow flavor near the bone, this exceptional cut has quickly become a steak house favorite.",
    price: "$64.00"
};

const FF5: MenuItem = {
    name: "Chocolate Shoppe",
    description:
        "Mayan chocolate mousse, dark chocolate bundt cake w/chocolate ganache, chocolate torte, chocolate soil, whipped chantilly cream, strawberry",
    price: "$14.00"
};

export const HamiltonsMenu: MenuItem[] = [FF1, FF2, FF3, FF4, FF5];

const GG1: MenuItem = {
    name: "#1 The Philly",
    description:
        "The classic cheesesteak stacked with juicy steak and a double helping of American cheese toasted on Artisan Italian bread and topped with green peppers, red onions and mayo.",
    price: "$7.89"
};

const GG2: MenuItem = {
    name: "#16 All-Pro Sweet Onion Teriyaki",
    description:
        "Tackle your hunger with our All-Pro Sweet Onion Teriyaki sandwich. Enjoy a delicious combination of toasted Hearty Multigrain bread, tender grilled chicken strips marinated in our Sweet Onion Teriyaki sauce, American cheese, lettuce, tomatoes, and red onions.",
    price: "$7.69"
};

const GG3: MenuItem = {
    name: "#11 Subway Club",
    description:
        "Oven-roasted turkey, Black Forest ham, USDA Choice Roast Beef, American cheese piled on Hearty Multigrain bread and topped with lettuce, tomatoes, red onions, and mayo. A club sandwich Subway style.",
    price: "$7.69"
};

const GG4: MenuItem = {
    name: "Meatball Marinara Wrap",
    description:
        "Our Meatball Marinara wrap is a double portion of Italian-style meatballs in irresistible marinara sauce, with Parmesan cheese, in a wrap. Get yourself one.",
    price: "$8.69"
};

const GG5: MenuItem = {
    name: "Chocolate Chip Cookie",
    description:
        "Every meal deserves a dessert, because simply put, they just belong together. So, when you're ordering your favorite sandwich, just remember that it pairs perfectly with one of our delectable cookies. They're freshly baked, come in a variety of flavors and they go hand-in-hand with that sub you're about to order.",
    price: "$0.99"
};

export const SubwayMenu: MenuItem[] = [GG1, GG2, GG3, GG4, GG5];

const HH1: MenuItem = {
    name: "Two Cheese Deluxe Signature Stackburger",
    description:
        "Price includes one Stackburger, choose a double or triple. A double stack (1/3lb) or triple stack (1/2lb) of 100% seasoned real beef patties, melty Sharp American and White Cheddar, stacked with all your favorite toppings; juicy tomato, white onion and crisp lettuce, on a soft and toasted bun.",
    price: "$7.79"
};

const HH2: MenuItem = {
    name: "Chicken Strip Baskets",
    description:
        "A DQ signature! Choice of 4 or 6 100% all-tenderloin white meat chicken strips. Served with crispy fries, Texas toast, and your choice of dipping sauce, such as our delicious country gravy.",
    price: "$8.99"
};

const HH3: MenuItem = {
    name: "Crispy Chicken Strips Salad Bowl",
    description:
        "100% all-tenderloin white meat crispy chicken strips served on top of a crisp bed of lettuce, diced tomatoes, bacon, and shredded cheddar. Served with house-made Hidden Valley Ranch, or your choice of dressing.",
    price: "$7.59"
};

const HH4: MenuItem = {
    name: "Pretzel Sticks with Zesty Queso",
    description:
        "Soft pretzel sticks, served hot from the oven, topped with salt and served with warm zesty queso dipping sauce.",
    price: "$3.39"
};

const HH5: MenuItem = {
    name: "M&M'S Milk Chocolate Candies Blizzard Treat",
    description:
        "M&M's candy pieces and chocolaty topping blended with creamy DQ vanilla soft serve to BLIZZARD perfection.",
    price: "$4.49"
};

export const DQMenu: MenuItem[] = [HH1, HH2, HH3, HH4, HH5];

const II1: MenuItem = {
    name: "Farmer's Grilled Cheese",
    description: "Monterey Jack cheese and brandied pear preserves.",
    price: "$6.25"
};

const II2: MenuItem = {
    name: "Baklava",
    description: "Honey and cinnamon flavored ice cream with baklava pieces.",
    price: "$3.50"
};

const II3: MenuItem = {
    name: "All Nighter Ice Cream",
    description:
        "Coffee ice cream with cookie dough, chocolate sandwich cookies, and a fudge swirl.",
    price: "$3.50"
};

const II4: MenuItem = {
    name: "Peanut-Cocoa-Loco",
    description:
        "Chocolate ice cream with a peanut butter swirl and Reese's peanut butter cup pieces.",
    price: "$3.50"
};

const II5: MenuItem = {
    name: "1923 Ice Cream",
    description:
        "French Vanila flavored ice cream with bittersweet chocolate chuncks and salted caramel swirls.",
    price: "$3.50"
};

export const UDairyMenu: MenuItem[] = [II1, II2, II3, II4, II5];

const JJ1: MenuItem = {
    name: "#1 BLT",
    description: "Bacon, lettuce and tomato",
    price: "$10.99"
};

const JJ2: MenuItem = {
    name: "#10 Tuna Fish",
    description: "Freshly made on premises",
    price: "$10.99"
};

const JJ3: MenuItem = {
    name: "#16 Mike's Chicken Philly",
    description: "Grilled onions, peppers & white American cheese.",
    price: "$11.99"
};

const JJ4: MenuItem = {
    name: "#19 BBQ Beef",
    description:
        "All natural oven roasted choice top round sliced fresh and smothered in BBQ sauce",
    price: "$11.99"
};

const JJ5: MenuItem = {
    name: "Brownie",
    description: "Gooey chocolate chip brownies",
    price: "$2.79"
};

export const JMMenu: MenuItem[] = [JJ1, JJ2, JJ3, JJ4, JJ5];

const KK1: MenuItem = {
    name: "#2 Big John",
    description: "Roast Beef, lettuce, tomato & mayo",
    price: "$8.25"
};

const KK2: MenuItem = {
    name: "#4 Turkey Tom",
    description: "Turkey, lettuce, tomato & mayo",
    price: "$8.25"
};

const KK3: MenuItem = {
    name: "Caprese Salami Pesto",
    description:
        "Salami & Fresh Mozzarella, slow roasted tomatoes, basil pesto, balsamic glaze, oil, oregano-basil, onion & mayo",
    price: "$10.00"
};

const KK4: MenuItem = {
    name: "The J.J. Gargantuan",
    description:
        "Salami, Capocollo, Turkey, Roast Beef, Ham & Provolone, onion, lettuce, tomato, mayo, oil & vinegar, & oregano-basil.",
    price: "$11.75"
};

const KK5: MenuItem = {
    name: "Fudge Chocolate Brownie",
    description:
        "Brownie made with semi-sweet chocolate, cocoa and melted chocolate.",
    price: "$2.00"
};

export const JJMenu: MenuItem[] = [KK1, KK2, KK3, KK4, KK5];

const LL1: MenuItem = {
    name: "Classic Cheese Steak",
    description:
        "It's called a classic for a reason. Our Classic Cheese Steak is prepared with grilled choice steak, mushrooms, onions, white American cheese and your choice of hot or sweet peppers.",
    price: "$6.99"
};

const LL2: MenuItem = {
    name: "Homemade Turkey",
    description:
        "No deli slices here. Our slow-roasted homemade turkey is hand-shredded and topped with provolone cheese, lettuce, tomato, onion, and mayo",
    price: "$6.99"
};

const LL3: MenuItem = {
    name: "Classic Meatball",
    description:
        "Satisfy your appetite with our Classic Meatball sub. Made with our savory meatballs, topped with marinara sauce, provolone, and Romano cheese",
    price: "$6.99"
};

const LL4: MenuItem = {
    name: "American Wagyu Roast Beef",
    description:
        "Ultra-premium American Wagyu beef slow-roasted, piled high then topped with provolone cheese, lettuce, tomato, onions, and mayo",
    price: "$7.49"
};

const LL5: MenuItem = {
    name: "Impossible Cheese Steak",
    description:
        "Cheese steak fans will be asking themselves, ''this isn't real meat?''. Our Impossible Cheese Steak is made with Impossible plant-based meat, melted white American Cheese, mushrooms, and onions",
    price: "$7.99"
};

export const CapriottisMenu: MenuItem[] = [LL1, LL2, LL3, LL4, LL5];

const MM1: MenuItem = {
    name: "Chang's Chicken Lettuce Wraps",
    description: "A secret family recipe and our signature dish. Enough said.",
    price: "$14.00"
};

const MM2: MenuItem = {
    name: "Dynamite Roll",
    description:
        "Tempura-battered shrimp, signature California roll, sriracha aioli, umami sauce",
    price: "$16.00"
};

const MM3: MenuItem = {
    name: "Kung Pao Chicken",
    description:
        "Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers",
    price: "$20.00"
};

const MM4: MenuItem = {
    name: "Chicken Fried Rice",
    description: "Wok-tossed with egg, carrots, bean sprouts, green onion",
    price: "$15.00"
};

const MM5: MenuItem = {
    name: "The Great Wall of Chocolate",
    description:
        "Six layers of chocolate cake, chocolate frosting, semi-sweet chocolate chips",
    price: "$12.00"
};

export const PFCMenu: MenuItem[] = [MM1, MM2, MM3, MM4, MM5];
