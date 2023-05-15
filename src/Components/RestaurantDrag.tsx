import React from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { Card } from "react-bootstrap";
import { DraggedRestaurant } from "../Interfaces";

export default function DragRestaurant({
    image,
    dragItem
}: {
    image: string;
    dragItem: DraggedRestaurant;
}) {
    const [{ isDragging }, drag] = useDrag({
        item: dragItem,
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    return (
        <Card.Img
            variant="top"
            src={image}
            className="card-image"
            ref={drag}
            style={{ opacity: isDragging ? 0.5 : 1 }}
        />
    );
}
