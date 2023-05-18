/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Restaurant, DraggedRestaurant, CurrUser } from "../Interfaces";
import RestaurantList from "./RestaurantList";
import { Card, Col, Row } from "react-bootstrap";
import AddReview from "./AddReview";
import ReviewDisplayElement from "./ReviewDisplay";

interface bucketProp {
    user: CurrUser;
    acceptingUserOfType: string;
}

export default function RestaurantBucket({
    user,
    acceptingUserOfType
}: bucketProp): JSX.Element {
    const [items, setItems] = useState<Restaurant[]>([]);
    const [curID, setID] = useState<number>(0);
    function handleChange(listR: Restaurant[]) {
        setItems(listR);
    }
    const handleAddRestaurant = (newItemID: string) => {
        const newItem: Restaurant = {
            ...(RestaurantList.find(
                (restaurant) => restaurant.id === newItemID
            ) as Restaurant),
            id: curID as unknown as string
        };
        setItems((items) => [...items, newItem as Restaurant]);
        setID(curID + 1);
    };
    const handleRemove = (id: string) => {
        const updatedRestaurants = items.filter(
            (restaurant) => restaurant.id !== id
        );
        setItems(updatedRestaurants);
    };

    const [{ isOver }, drop] = useDrop({
        accept: "RESTAURANT",
        drop: (item: DraggedRestaurant) => {
            handleAddRestaurant(item.newItem);
        },
        canDrop: () => {
            return user.type === acceptingUserOfType;
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
                backgroundColor: isOver ? "grey" : "lightblue",
                justifyContent: "center",
                minHeight: "500px"
            }}
        >
            Insert Restaurants here:
            {items.map((item) => (
                <div key={item.id} style={{ minHeight: "300px" }}>
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
                            handleRemove={handleRemove}
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
