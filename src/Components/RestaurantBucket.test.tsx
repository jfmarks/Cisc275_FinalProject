import React from "react";
import { render } from "@testing-library/react";
import RestaurantBucket from "./RestaurantBucket";
import userList from "../CurrentUser";

describe("RestuarantBucket", () => {
    test("renders the correct number of full stars", () => {
        const { container } = render(
            <RestaurantBucket
                user={userList[0]}
                acceptingUserOfType={"Manager"}
            />
        );
        const starElements = container.getElementsByClassName("star");

        expect(starElements.length).toBe(3);
    });
});
