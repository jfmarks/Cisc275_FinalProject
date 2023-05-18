import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Restaurant } from "../Interfaces";
import "../RestaurantStyle.css";

export default function ReviewDisplayElement({
    id,
    restaurants,
    handleChange,
    handleRemove
}: {
    id: string;
    restaurants: Restaurant[];
    handleChange: (listR: Restaurant[]) => void;
    handleRemove: (ID: string) => void;
}): JSX.Element {
    const [review, setNewReview] = useState("");
    const [rating, setNewRating] = useState(0);
    const handleAddReview = () => {
        handleChange(updatedRestaurants);
    };
    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newRating = parseFloat(e.target.value);
        setNewRating(newRating);
    };

    const updatedRestaurants: Restaurant[] = restaurants.map(
        (restaurant: Restaurant) => {
            if (restaurant.id === id) {
                return {
                    ...restaurant,
                    reviews: [review],
                    averageRating: rating
                };
            }
            return restaurant; // Return the original restaurant if ID doesn't match
        }
    );

    return (
        <Form>
            <Form.Group controlId="ReviewForm">
                <Form.Label>Add a Review:</Form.Label>
                <Form.Control
                    type="text"
                    value={review}
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <Form.Control
                    type="range"
                    step="0.1"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={handleSliderChange}
                    className="slider-bar"
                    style={{ backgroundColor: "grey" }}
                />
                <div className="slider-value">{rating.toFixed(1)} ★</div>
            </Form.Group>
            <Button
                style={{ marginRight: "5px" }}
                variant="primary"
                onClick={handleAddReview}
            >
                Add Review
            </Button>
            <Button
                style={{ marginLeft: "5px" }}
                variant="primary"
                onClick={() => handleRemove(id)}
            >
                Remove
            </Button>
        </Form>
    );
}
