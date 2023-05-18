import React from "react";
import { render } from "@testing-library/react";
import { UserRestaurants } from "./UserRestaurants";
import userList from "../CurrentUser";

describe("UserRestaurants", () => {
    test("renders the correct number of full stars", () => {
        const { container } = render(
            <UserRestaurants
                restaurants={[]}
                user={userList[0]}
                handleChange={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const starElements = container.getElementsByClassName("star");

        expect(starElements.length).toBe(3);
    });
});
