import React from "react";
import { render } from "@testing-library/react";
import ReviewDisplayElement from "./AddReview";

describe("AddReview", () => {
    test("renders the correct number of full stars", () => {
        const { container } = render(
            <ReviewDisplayElement
                id={""}
                restaurants={[]}
                handleChange={function (): void {
                    throw new Error("Function not implemented.");
                }}
                handleRemove={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const starElements = container.getElementsByClassName("star");

        expect(starElements.length).toBe(3);
    });
});
