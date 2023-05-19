import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { UserRestaurants } from "./UserRestaurants";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Mock the handleChange function
const handleChangeMock = jest.fn();

// Define a sample restaurant
const sampleRestaurant = {
    id: "1",
    name: "Sample Restaurant",
    description: "Sample description",
    image: "sample.jpg",
    menu: [
        { name: "Item 1", price: "$10", description: "Sample item 1" },
        { name: "Item 2", price: "$15", description: "Sample item 2" }
    ],
    averageRating: 4.5,
    priceRange: "$$",
    diningExperience: "Casual",
    reviews: []
};

describe("UserRestaurants", () => {
    it("renders the component correctly", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <UserRestaurants
                    restaurants={[sampleRestaurant]}
                    handleChange={handleChangeMock}
                    user={{
                        type: "Critic",
                        id: "1",
                        username: "Mr. Manager"
                    }}
                />
            </DndProvider>
        );
    });

    it("renders the component correctly", () => {
        expect(screen.getByText("User Restaurants")).toBeInTheDocument();
    });

    it("displays the restaurant name", () => {
        expect(screen.getByText(sampleRestaurant.name)).toBeInTheDocument();
    });

    it("calls the handleChange function when a change is made", () => {
        const inputElement = screen.getByLabelText("Restaurant Name");
        fireEvent.change(inputElement, { target: { value: "New Name" } });
        expect(handleChangeMock).toHaveBeenCalledWith([
            { ...sampleRestaurant, name: "New Name" }
        ]);
    });

    // Add more test cases to cover other functions and interactions in your component
});
