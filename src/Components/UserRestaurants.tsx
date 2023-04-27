import React, { useState } from "react";
import RestaurantList from "./RestaurantList";
import { Restaurant } from "../Interfaces";
//import { PriceRange } from "../Interfaces";
//import { MenuItem } from "../Interfaces";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
export function UserRestaurants(): JSX.Element {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [menuVisible, setMenuVisible] = useState<string | null>(null);
    const [attributesVisible, setAttributesVisible] = useState<string | null>(
        null
    ); // state to keep track of visible menu
    const [editMode, setEditMode] = useState(false); // Initial state for editMode is false
    // Dummy data for restaurants (replace with actual fetch call)
    const fetchRestaurants = (): void => {
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
    const handleShowAttributes = (restaurantId: string): void => {
        // Toggle menu visibility for the selected restaurant
        setAttributesVisible((prevId) =>
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
            <h3
                style={{
                    border: "1px solid #ccc", // Border color
                    borderRadius: "10px", // Border radius
                    padding: "10px", // Padding around the container
                    backgroundColor: "lightblue"
                }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ flex: 1, textAlign: "center" }}>
                        Restaurant List
                    </div>
                    <div>
                        <Button onClick={() => handleEditRestaurant()}>
                            {editMode ? "Save" : "Edit"}
                        </Button>
                    </div>
                </div>
            </h3>
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
                                        <Button
                                            onClick={() =>
                                                handleDeleteRestaurant(
                                                    restaurant.id
                                                )
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        <Card.Title>
                                            {restaurant.name}
                                        </Card.Title>
                                        {/* Render other attributes as needed */}
                                        <div>
                                            <div
                                                style={{
                                                    display:
                                                        menuVisible ===
                                                        restaurant.id
                                                            ? "block"
                                                            : "none"
                                                }}
                                            >
                                                <strong
                                                    style={{
                                                        backgroundColor:
                                                            "royalblue",
                                                        flexDirection: "row"
                                                    }}
                                                >
                                                    Menu
                                                </strong>
                                                <ul>
                                                    {restaurant.menu.map(
                                                        (menuItem) => (
                                                            <li
                                                                key={
                                                                    menuItem.name
                                                                }
                                                            >
                                                                <strong>
                                                                    {
                                                                        menuItem.name
                                                                    }
                                                                </strong>{" "}
                                                                {
                                                                    menuItem.description
                                                                }{" "}
                                                                -{" "}
                                                                <strong>
                                                                    {
                                                                        menuItem.price
                                                                    }
                                                                </strong>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <div
                                                style={{
                                                    display:
                                                        attributesVisible ===
                                                        restaurant.id
                                                            ? "block"
                                                            : "none"
                                                }}
                                            >
                                                <Card.Text>
                                                    {restaurant.description}
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={() =>
                                                handleShowMenu(restaurant.id)
                                            }
                                        >
                                            {menuVisible === restaurant.id
                                                ? "Hide"
                                                : "Menu"}
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                handleShowAttributes(
                                                    restaurant.id
                                                )
                                            }
                                        >
                                            {attributesVisible === restaurant.id
                                                ? "Hide"
                                                : "Details"}
                                        </Button>
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
