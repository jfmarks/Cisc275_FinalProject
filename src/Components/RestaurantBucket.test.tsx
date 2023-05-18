import React from "react";
import { render } from "@testing-library/react";
import RestaurantBucket from "./RestaurantBucket";

describe("RestuarantBucket", () => {
    test("renders the correct number of full stars", () => {
        const { container } = render(<RestaurantBucket />);
        const starElements = container.getElementsByClassName("star");

        expect(starElements.length).toBe(3);
    });
});
