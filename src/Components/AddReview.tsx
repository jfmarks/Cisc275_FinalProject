import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Restaurant } from "../Interfaces";

export default function ReviewDisplayElement({
    id,
    restaurants,
    handleChange
}: {
    id: string;
    restaurants: Restaurant[];
    handleChange: (listR: Restaurant[]) => void;
}): JSX.Element {
    const [review, setNewReview] = useState("");
    const [rating, setNewRating] = useState(0);
    const handleAddReview = () => {
        handleChange(updatedRestaurants);
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
                    type="number"
                    value={rating}
                    onChange={(e) =>
                        setNewRating(e.target.value as unknown as number)
                    }
                />
            </Form.Group>
            <Button variant="primary" onClick={handleAddReview}>
                Add Review
            </Button>
        </Form>
    );
}
