import React from "react";
import { render } from "@testing-library/react";
import { AddRestaurant } from "./AddRestaurant";

describe("AddRestaurant", () => {
    test("Renders the component", () => {
        const { container } = render(
            <AddRestaurant
                addRestaurant={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );

        expect(container).toBeInTheDocument;
    });
});
