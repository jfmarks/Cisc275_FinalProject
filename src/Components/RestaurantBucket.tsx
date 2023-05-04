/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { DragObjectWithType } from "react-dnd";
import { Restaurant, droppedItem } from "../Interfaces";
import RestaurantList from "./RestaurantList";
import { Card, Row } from "react-bootstrap";

export default function RestaurantBucket(): JSX.Element {
    const [items, setItems] = useState<Restaurant[]>([]);
    const handleAddRestaurant = (newItemID: string) => {
        const newItem: Restaurant = RestaurantList.find(
            (restaurant) => restaurant.id === newItemID
        ) as Restaurant;
        setItems((items) => [...items, newItem as Restaurant]);
    };

    const [{ isOver }, drop] = useDrop({
        accept: "RESTAURANT",
        drop: (item: DragObjectWithType & { newItem: string }) => {
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
                <Card.Img
                    key={item.id}
                    src={item.image}
                    className="card-image"
                />
            ))}
        </Row>
    );
}
