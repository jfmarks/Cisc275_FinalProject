import React from "react";
import { render } from "@testing-library/react";
import StarRating from "./displayRating";

describe("StarRating", () => {
    test("renders the correct number of full stars", () => {
        const { container } = render(<StarRating rating={3.5} />);
        const starElements = container.getElementsByClassName("star");

        expect(starElements.length).toBe(3);
    });
    test("renders the correct number of half stars", () => {
        const { container } = render(<StarRating rating={3.5} />);
        const starElements = container.getElementsByClassName("half-star");

        expect(starElements.length).toBe(1);
    });
    test("renders the correct number of extra stars", () => {
        const { container } = render(<StarRating rating={3.5} />);
        const starElements = container.getElementsByClassName("extra-star");

        expect(starElements.length).toBe(1);
    });

    test("renders the correct average rating", () => {
        const { getByText } = render(<StarRating rating={4.8} />);
        const averageRatingElement = getByText("4.8");

        expect(averageRatingElement).toBeInTheDocument();
    });

    test("renders empty stars for zero rating", () => {
        const { container } = render(<StarRating rating={0} />);
        const emptyStarElements = container.getElementsByClassName("star");

        expect(emptyStarElements.length).toBe(0);
    });

    test("renders full stars for integer rating", () => {
        const { container } = render(<StarRating rating={3} />);
        const fullStarElements = container.getElementsByClassName("star");

        expect(fullStarElements.length).toBe(3);
    });

    test("renders half star for rating with decimal", () => {
        const { container } = render(<StarRating rating={2.5} />);
        const halfStarElements = container.getElementsByClassName("half-star");

        expect(halfStarElements.length).toBe(1);
    });
});
