import React, { useState } from "react";
import { Restaurant } from "../Interfaces";
import { PriceRange } from "../Interfaces";
//import { MenuItem } from "../Interfaces";
import { Card, Col, Container, Row } from "react-bootstrap";
import RestaurantList from "./RestaurantList";

export function UserRestaurants(): JSX.Element {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [menuVisible, setMenuVisible] = useState<string | null>(null); // state to keep track of visible menu
    const [editMode, setEditMode] = useState(false); // Initial state for editMode is false
    // Dummy data for restaurants (replace with actual fetch call)
    //const priceRange: PriceRange = { minPrice: 0, maxPrice: 10 };
    const fetchRestaurants = (): void => {
        // const data: Restaurant[] = [
        //     {
        //         id: "1",
        //         name: "McDonalds",
        //         description: "Borgersss",
        //         image: "noimage.jpg",
        //         menu: [
        //             {
        //                 name: "burger",
        //                 description: "freshly grilled horse meat",
        //                 price: 2.99
        //             },
        //             {
        //                 name: "mcflurry",
        //                 description: "cow product be like",
        //                 price: 3.99
        //             },
        //             {
        //                 name: "Krusty pizza",
        //                 description: "this is mcdonalds sir",
        //                 price: 8.99
        //             }
        //         ],
        //         priceRange: priceRange,
        //         averageRating: 3,
        //         diningExperience: "Fast Food"
        //     },
        //     {
        //         id: "2",
        //         name: "fdsafdsa",
        //         description: "fdsafds",
        //         image: "noimage.jpg",
        //         menu: [
        //             {
        //                 name: "fddsfds",
        //                 description: "freshly grilled horse meat",
        //                 price: 2.99
        //             },
        //             {
        //                 name: "fdsfds",
        //                 description: "cow product be like",
        //                 price: 3.99
        //             },
        //             {
        //                 name: "fdsfds pizza",
        //                 description: "this is mcdonalds sir",
        //                 price: 8.99
        //             }
        //         ],
        //         priceRange: priceRange,
        //         averageRating: 2,
        //         diningExperience: "Junk Food"
        //     },
        //     {
        //         id: "3",
        //         name: "test",
        //         description: "Borgersss",
        //         image: "noimage.jpg",
        //         menu: [
        //             {
        //                 name: "burger",
        //                 description: "freshly grilled horse meat",
        //                 price: 2.99
        //             },
        //             {
        //                 name: "mcflurry",
        //                 description: "cow product be like",
        //                 price: 3.99
        //             },
        //             {
        //                 name: "Krusty pizza",
        //                 description: "this is mcdonalds sir",
        //                 price: 8.99
        //             }
        //         ],
        //         priceRange: priceRange,
        //         averageRating: 3,
        //         diningExperience: "Fast Food"
        //     },
        //     {
        //         id: "4",
        //         name: "yummmyy",
        //         description: "fdsafds",
        //         image: "noimage.jpg",
        //         menu: [
        //             {
        //                 name: "fddsfds",
        //                 description: "freshly grilled horse meat",
        //                 price: 2.99
        //             },
        //             {
        //                 name: "fdsfds",
        //                 description: "cow product be like",
        //                 price: 3.99
        //             },
        //             {
        //                 name: "fdsfds pizza",
        //                 description: "this is mcdonalds sir",
        //                 price: 8.99
        //             }
        //         ],
        //         priceRange: priceRange,
        //         averageRating: 2,
        //         diningExperience: "Junk Food"
        //     },
        //     {
        //         id: "5",
        //         name: "pov food",
        //         description: "Borgersss",
        //         image: "noimage.jpg",
        //         menu: [
        //             {
        //                 name: "burger",
        //                 description: "freshly grilled horse meat",
        //                 price: 2.99
        //             },
        //             {
        //                 name: "mcflurry",
        //                 description: "cow product be like",
        //                 price: 3.99
        //             },
        //             {
        //                 name: "Krusty pizza",
        //                 description: "this is mcdonalds sir",
        //                 price: 8.99
        //             }
        //         ],
        //         priceRange: priceRange,
        //         averageRating: 3,
        //         diningExperience: "Fast Food"
        //     },
        //     {
        //         id: "6",
        //         name: "goldenapple",
        //         description: "fdsafds",
        //         image: "noimage.jpg",
        //         menu: [
        //             {
        //                 name: "fddsfds",
        //                 description: "freshly grilled horse meat",
        //                 price: 2.99
        //             },
        //             {
        //                 name: "fdsfds",
        //                 description: "cow product be like",
        //                 price: 3.99
        //             },
        //             {
        //                 name: "fdsfds pizza",
        //                 description: "this is mcdonalds sir",
        //                 price: 8.99
        //             }
        //         ],
        //         priceRange: priceRange,
        //         averageRating: 2,
        //         diningExperience: "Junk Food"
        //     }

        //     // Add more restaurants as needed
        // ];
        const data = RestaurantList;
        setRestaurants(data);
    };

    useState(() => {
        fetchRestaurants();
    });
    const handleShowMenu = (restaurantId: string): void => {
        // Toggle menu visibility for the selected restaurant
        setMenuVisible((prevId) =>
            prevId === restaurantId ? null : restaurantId
        );
    };
    const handleRestaurantNameChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        const updatedRestaurants = restaurants.map((restaurant) => {
            if (restaurant.id === id) {
                return { ...restaurant, name: e.target.value };
            }
            return restaurant;
        });
        setRestaurants(updatedRestaurants);
    };
    const handleRestaurantDescriptionChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        const updatedRestaurants = restaurants.map((restaurant) => {
            if (restaurant.id === id) {
                return { ...restaurant, description: e.target.value };
            }
            return restaurant;
        });
        setRestaurants(updatedRestaurants);
    };
    const handleDeleteRestaurant = (id: string) => {
        const updatedRestaurants = restaurants.filter(
            (restaurant) => restaurant.id !== id
        );
        setRestaurants(updatedRestaurants);
    };
    const handleEditRestaurant = (): void => {
        setEditMode(!editMode);
    };
    return (
        <Container
            style={{
                border: "1px solid #ccc", // Border color
                borderRadius: "10px", // Border radius
                padding: "10px" // Padding around the container
            }}
        >
            <h2
                style={{
                    border: "1px solid #ccc", // Border color
                    borderRadius: "10px", // Border radius
                    padding: "10px", // Padding around the container
                    backgroundColor: "lightblue"
                }}
            >
                Restaurant List
            </h2>
            <button onClick={() => handleEditRestaurant()}>
                {editMode ? "Save" : "Edit"}
            </button>
            <Row>
                {restaurants.map((restaurant) => (
                    <Col key={restaurant.id} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={restaurant.image} />
                            <Card.Body>
                                {editMode ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={restaurant.name}
                                            onChange={(e) =>
                                                handleRestaurantNameChange(
                                                    e,
                                                    restaurant.id
                                                )
                                            }
                                        />
                                        <input
                                            type="text"
                                            value={restaurant.description}
                                            onChange={(e) =>
                                                handleRestaurantDescriptionChange(
                                                    e,
                                                    restaurant.id
                                                )
                                            }
                                        />
                                        {/* Render other editable fields as needed */}
                                        <button
                                            onClick={() =>
                                                handleDeleteRestaurant(
                                                    restaurant.id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <Card.Title>
                                            {restaurant.name}
                                        </Card.Title>
                                        <Card.Text>
                                            {restaurant.description}
                                        </Card.Text>
                                        {/* Render other attributes as needed */}
                                        <div
                                            style={{
                                                display:
                                                    menuVisible ===
                                                    restaurant.id
                                                        ? "block"
                                                        : "none"
                                            }}
                                        >
                                            <h3>Menu</h3>
                                            <ul>
                                                {restaurant.menu.map(
                                                    (menuItem) => (
                                                        <li key={menuItem.name}>
                                                            <strong>
                                                                {menuItem.name}
                                                            </strong>{" "}
                                                            {
                                                                menuItem.description
                                                            }{" "}
                                                            - {menuItem.price}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleShowMenu(restaurant.id)
                                            }
                                        >
                                            {menuVisible === restaurant.id
                                                ? "Hide Menu"
                                                : "Show Menu"}
                                        </button>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
