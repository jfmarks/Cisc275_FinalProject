import React from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { DraggedRestaurant } from "../Interfaces";

export default function DragRestaurant({
    image,
    dragItem,
    dragItemType
}: {
    image: string;
    dragItem: DraggedRestaurant;
    dragItemType: string;
}) {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: dragItemType,
            item: dragItem,
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [dragItem]
    );

    return (
        <img
            src={image}
            alt="restaurant"
            className="card-image"
            ref={drag}
            style={{ opacity: isDragging ? 0.5 : 1 }}
        />
    );
}
