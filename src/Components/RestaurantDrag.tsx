import React from "react";
import { useDrag } from "react-dnd";
import { Card } from "react-bootstrap";
import { droppedItem } from "../Interfaces";

export default function DragRestaurant({
    image,
    dragItem
}: {
    image: string;
    dragItem: droppedItem;
}) {
    const [, drag] = useDrag(
        () => ({
            type: "RESTAURANT",
            item: dragItem,
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [dragItem]
    );
    return (
        <Card.Img variant="top" src={image} className="card-image" ref={drag} />
    );
}