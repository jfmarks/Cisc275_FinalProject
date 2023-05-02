import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Restaurant, droppedItem } from "../Interfaces";
import RestaurantList from "./RestaurantList";
export default function RestaurantBucket({
    list
}: {
    list: Restaurant[];
}): JSX.Element {
    const [items, setItems] = useState<Restaurant[]>(list);
    const handleAddRestaurant = (newItemID: string) => {
        const newItem = RestaurantList.find(
            (restaurant) => restaurant.id === newItemID
        );
        setItems([...items, newItem as Restaurant]);
    };

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "RESTAURANT",
        drop: (item: droppedItem) => {
            console.log(item);
            handleAddRestaurant(item.newItem);
            console.log(items);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    }));

    return (
        <div
            ref={drop}
            role={"RestaurantBucket"}
            style={{ backgroundColor: isOver ? "green" : "red" }}
        >
            Insert Restaurants here:
            {items.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}
