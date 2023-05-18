import React from "react";
import { render } from "@testing-library/react";
import { AddRestaurant } from "./AddRestaurant";

describe("AddRestaurant", () => {
    test("renders the correct number of full stars", () => {
        const { container } = render(
            <AddRestaurant
                addRestaurant={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const starElements = container.getElementsByClassName("star");

        expect(starElements.length).toBe(3);
    });
});