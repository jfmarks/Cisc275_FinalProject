import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Restaurant } from "../Interfaces";

interface AddRestaurantProps {
    addRestaurant: (newRestaurant: Restaurant) => void;
}

export function AddRestaurant({ addRestaurant }: AddRestaurantProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [diningExperience, setDiningExperience] = useState("");
    const [reviews, setReviews] = useState([]);
    const [id, setPrevId] = useState(51);

    const handleAddRestaurant = () => {
        const newRestaurant: Restaurant = {
            id: String(id),
            name,
            description,
            image,
            menu: [],
            averageRating: 0,
            priceRange,
            diningExperience,
            reviews
        };
        addRestaurant(newRestaurant);
        setPrevId(id + 1);
        setName("");
        setDescription("");
        setImage("");
        setPriceRange("");
        setDiningExperience("");
        setReviews([]);
    };

    return (
        <Container>
            <h2>Add Restaurant</h2>
            <Form>
                <Form.Group as={Row} controlId="formRestaurantName">
                    <Form.Label column sm={2}>
                        Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formRestaurantDescription">
                    <Form.Label column sm={2}>
                        Description:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formRestaurantImage">
                    <Form.Label column sm={2}>
                        Image URL:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formRestaurantPriceRange">
                    <Form.Label column sm={2}>
                        Price Range:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="$"
                            name="priceRange"
                            id="priceRange1"
                            value="$"
                            checked={priceRange === "$"}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            label="$$"
                            name="priceRange"
                            id="priceRange2"
                            value="$$"
                            checked={priceRange === "$$"}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            label="$$$"
                            name="priceRange"
                            id="priceRange3"
                            value="$$$"
                            checked={priceRange === "$$$"}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formRestaurantDiningExperience">
                    <Form.Label column sm={2}>
                        Dining Experience:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="Casual"
                            name="diningExperience"
                            id="diningExperience1"
                            value="Casual"
                            checked={diningExperience === "Casual"}
                            onChange={(e) =>
                                setDiningExperience(e.target.value)
                            }
                        ></Form.Check>
                        <Form.Check
                            type="radio"
                            label="Luxury"
                            name="diningExperience"
                            id="diningExperience2"
                            value="Luxury"
                            checked={diningExperience === "Luxury"}
                            onChange={(e) =>
                                setDiningExperience(e.target.value)
                            }
                        ></Form.Check>
                        <Form.Check
                            type="radio"
                            label="Fast Food"
                            name="diningExperience"
                            id="diningExperience3"
                            value="Fast Food"
                            checked={diningExperience === "Fast Food"}
                            onChange={(e) =>
                                setDiningExperience(e.target.value)
                            }
                        ></Form.Check>
                    </Col>
                </Form.Group>
                <Button variant="primary" onClick={handleAddRestaurant}>
                    Add Restaurant
                </Button>
            </Form>
        </Container>
    );
}
