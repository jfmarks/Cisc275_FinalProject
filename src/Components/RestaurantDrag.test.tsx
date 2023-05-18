import React from "react";
import { render } from "@testing-library/react";
import DragRestaurant from "./RestaurantDrag";
import { DraggedRestaurant } from "../Interfaces";

describe("RestaurantDrag", () => {
    const temp: DraggedRestaurant = {
        type: "",
        id: "",
        newItem: ""
    };

    test("renders the correct number of full stars", () => {
        const { container } = render(
            <DragRestaurant image={""} dragItem={temp} />
        );
        const starElements = container.getElementsByClassName("star");

        expect(starElements.length).toBe(3);
    });
});
