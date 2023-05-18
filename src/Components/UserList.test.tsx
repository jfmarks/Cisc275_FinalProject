import React from "react";
import { render } from "@testing-library/react";
import { UserList } from "./UserList";

describe("UserList", () => {
    test("renders the correct number of full stars", () => {
        const { container } = render(<UserList />);
        const starElements = container.getElementsByClassName("star");

        expect(starElements.length).toBe(3);
    });
});
