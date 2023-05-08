/* eslint-disable no-extra-parens */
/* eslint-disable indent */
import React, { useState } from "react";
import RestaurantList from "./RestaurantList";
import { Restaurant } from "../Interfaces";
import CurrentUser from "../CurrentUser";
import { AddRestaurant } from "./AddRestaurant";
import "../RestaurantStyle.css";
import DragRestaurant from "./RestaurantDrag";

import { Card, Col, Container, Row, Button } from "react-bootstrap";
export function UserRestaurants(): JSX.Element {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [ratingVisible, setRatingVisible] = useState<string | null>(null);
    const [menuVisible, setMenuVisible] = useState<string | null>(null);
    const [attributesVisible, setAttributesVisible] = useState<string | null>(
        null
    ); // state to keep track of visible menu
    const [editMode, setEditMode] = useState(false); // Initial state for editMode is false
    const [addMode, setAddMode] = useState(false);
    // Dummy data for restaurants (replace with actual fetch call)
    const fetchRestaurants = (): void => {
        const data = RestaurantList;
        setRestaurants(data);
    };

    useState(() => {
        fetchRestaurants();
    });
    const addRestaurant = (newRestaurant: Restaurant) => {
        setRestaurants([...restaurants, newRestaurant]);
        setAddMode(false);
    };
    const handleShowMenu = (restaurantId: string): void => {
        // Toggle menu visibility for the selected restaurant
        setMenuVisible((prevId) =>
            prevId === restaurantId ? null : restaurantId
        );
    };
    const handleShowAttributes = (restaurantId: string): void => {
        // Toggle info visibility for the selected restaurant
        setAttributesVisible((prevId) =>
            prevId === restaurantId ? null : restaurantId
        );
    };
    const handleShowRating = (restaurantId: string): void => {
        // Toggle info visibility for the selected restaurant
        setRatingVisible((prevId) =>
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
    const handleRestaurantPriceChange = (price: string, id: string) => {
        setRestaurants((prevRestaurants) =>
            prevRestaurants.map((rest) => {
                if (rest.id === id) {
                    return { ...rest, priceRange: price };
                } else {
                    return rest;
                }
            })
        );
    };
    const handleRestaurantRatingChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        const updatedRestaurants = restaurants.map((restaurant) => {
            if (restaurant.id === id) {
                return { ...restaurant, averageRating: Number(e.target.value) };
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

    //const handleReview =

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
                        {editMode && (
                            <Button
                                variant="success"
                                onClick={() =>
                                    CurrentUser.type == "Critic"
                                        ? setAddMode(!addMode)
                                        : null
                                }
                                disabled={
                                    CurrentUser.type === "Manager" ||
                                    CurrentUser.type === "Foodie"
                                }
                            >
                                {addMode ? "Cancel" : "Add Restaurant"}
                            </Button>
                        )}
                        <Button
                            onClick={() =>
                                CurrentUser.type == "Critic" ||
                                CurrentUser.type == "Manager"
                                    ? handleEditRestaurant()
                                    : null
                            }
                            disabled={CurrentUser.type === "Foodie"}
                        >
                            {editMode ? "Save" : "Edit"}
                        </Button>
                    </div>
                </div>
            </h3>
            <Row>
                {addMode && editMode && (
                    <AddRestaurant addRestaurant={addRestaurant} />
                )}
                {restaurants.map((restaurant) => (
                    <Col
                        key={restaurant.id}
                        sm={3}
                        md={6}
                        lg={6}
                        style={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Card
                            className="card-gradient"
                            style={{
                                height:
                                    menuVisible === restaurant.id ||
                                    attributesVisible === restaurant.id ||
                                    editMode
                                        ? "fit-content"
                                        : "400px",
                                width: "600px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "10px"
                            }}
                        >
                            <br></br>
                            <DragRestaurant
                                image={restaurant.image}
                                dragItem={{
                                    type: "RESTAURANT",
                                    newItem: restaurant.id
                                }}
                            ></DragRestaurant>
                            <Card.Body>
                                {editMode ? (
                                    <div className="editmode">
                                        <input
                                            className="inputedit"
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
                                            className="inputedit"
                                            type="text"
                                            value={restaurant.description}
                                            onChange={(e) =>
                                                handleRestaurantDescriptionChange(
                                                    e,
                                                    restaurant.id
                                                )
                                            }
                                        />
                                        <input
                                            className="inputedit"
                                            type="range"
                                            step="0.1"
                                            min="1"
                                            max="5"
                                            value={restaurant.averageRating}
                                            onChange={(e) =>
                                                handleRestaurantRatingChange(
                                                    e,
                                                    restaurant.id
                                                )
                                            }
                                        />
                                        <p style={{ marginTop: "-25px" }}>
                                            {restaurant.averageRating} ★
                                        </p>
                                        <div className="priceButtonGroup">
                                            <button
                                                className={`priceButton ${
                                                    restaurant.priceRange ===
                                                    "$"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleRestaurantPriceChange(
                                                        "$",
                                                        restaurant.id
                                                    )
                                                }
                                            >
                                                $
                                            </button>
                                            <button
                                                className={`priceButton ${
                                                    restaurant.priceRange ===
                                                    "$$"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleRestaurantPriceChange(
                                                        "$$",
                                                        restaurant.id
                                                    )
                                                }
                                            >
                                                $$
                                            </button>
                                            <button
                                                className={`priceButton ${
                                                    restaurant.priceRange ===
                                                    "$$$"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleRestaurantPriceChange(
                                                        "$$$",
                                                        restaurant.id
                                                    )
                                                }
                                            >
                                                $$$
                                            </button>
                                        </div>
                                        <br></br>
                                        {/* Render other editable fields as needed */}
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                CurrentUser.type == "Critic"
                                                    ? handleDeleteRestaurant(
                                                          restaurant.id
                                                      )
                                                    : null
                                            }
                                            disabled={
                                                CurrentUser.type === "Manager"
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
                                            <Button
                                                variant="info"
                                                onClick={() =>
                                                    handleShowMenu(
                                                        restaurant.id
                                                    )
                                                }
                                            >
                                                {menuVisible === restaurant.id
                                                    ? "Hide Menu"
                                                    : "Menu"}
                                            </Button>
                                            <Button
                                                variant="info"
                                                onClick={() =>
                                                    handleShowAttributes(
                                                        restaurant.id
                                                    )
                                                }
                                            >
                                                {attributesVisible ===
                                                restaurant.id
                                                    ? "Hide Details"
                                                    : "Details"}
                                            </Button>
                                            <div>
                                                <Button
                                                    variant="info"
                                                    onClick={() =>
                                                        handleShowRating(
                                                            restaurant.id
                                                        )
                                                    }
                                                >
                                                    {ratingVisible ===
                                                    restaurant.id
                                                        ? "Hide Rating"
                                                        : "Rating"}
                                                </Button>
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
                                                    <div
                                                        style={{
                                                            height: "auto"
                                                        }}
                                                    >
                                                        <p>
                                                            {
                                                                restaurant.diningExperience
                                                            }
                                                        </p>

                                                        <p>
                                                            {
                                                                restaurant.description
                                                            }
                                                        </p>
                                                        <p>
                                                            {
                                                                restaurant.averageRating
                                                            }
                                                        </p>
                                                        <p>
                                                            {
                                                                restaurant.priceRange
                                                            }
                                                        </p>
                                                    </div>
                                                </Card.Text>
                                            </div>
                                            <div
                                                style={{
                                                    display:
                                                        menuVisible ===
                                                        restaurant.id
                                                            ? "block"
                                                            : "none"
                                                }}
                                            >
                                                <p className="menu-text">
                                                    Menu
                                                </p>
                                                <div
                                                    style={{
                                                        height: "200px",
                                                        overflowY: "scroll",
                                                        overflowX: "hidden"
                                                    }}
                                                >
                                                    <ul>
                                                        {restaurant.menu.map(
                                                            (menuItem) => (
                                                                <li
                                                                    key={
                                                                        menuItem.name
                                                                    }
                                                                >
                                                                    <p className="menu-name">
                                                                        {
                                                                            menuItem.name
                                                                        }{" "}
                                                                        -{" "}
                                                                        <span className="menu-price">
                                                                            {
                                                                                menuItem.price
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                    <p className="menu-description">
                                                                        {
                                                                            menuItem.description
                                                                        }
                                                                    </p>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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
