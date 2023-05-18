import React from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { DraggedRestaurant } from "../Interfaces";
import { Card } from "react-bootstrap";

export default function DragRestaurant({
    image,
    dragItem
}: {
    image: string;
    dragItem: DraggedRestaurant;
}) {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: "RESTAURANT",
            item: dragItem,
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [dragItem]
    );
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
