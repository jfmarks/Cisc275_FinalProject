/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Restaurant, DraggedRestaurant } from "../Interfaces";
import RestaurantList from "./RestaurantList";
import { Card, Col, Row } from "react-bootstrap";
import AddReview from "./AddReview";
import ReviewDisplayElement from "./ReviewDisplay";

export default function RestaurantBucket(): JSX.Element {
    const [items, setItems] = useState<Restaurant[]>([]);
    function handleChange(listR: Restaurant[]) {
        setItems(listR);
    }
    const handleAddRestaurant = (newItemID: string) => {
        const newItem: Restaurant = RestaurantList.find(
            (restaurant) => restaurant.id === newItemID
        ) as Restaurant;
        setItems((items) => [...items, newItem as Restaurant]);
    };

    const [{ isOver }, drop] = useDrop({
        accept: "RESTAURANT",
        drop: (item: DraggedRestaurant) => {
            handleAddRestaurant(item.newItem);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    return (
        <Row
            ref={drop}
            role={"RestaurantBucket"}
            style={{
                backgroundColor: isOver ? "grey" : "white",
                justifyContent: "center",
                minHeight: "300px"
            }}
        >
            Insert Restaurants here:
            {items.map((item) => (
                <div key={item.id}>
                    <Card.Img
                        key={item.id}
                        src={item.image}
                        className="card-image"
                    />
                    <Col>
                        <AddReview
                            key={item.id}
                            id={item.id}
                            restaurants={items}
                            handleChange={handleChange}
                        ></AddReview>
                        <ReviewDisplayElement
                            restaurant={item}
                        ></ReviewDisplayElement>
                    </Col>
                </div>
            ))}
        </Row>
    );
}
