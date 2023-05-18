import React from "react";
import { render } from "@testing-library/react";
import ReviewDisplayElement from "./ReviewDisplay";
import { KFCMenu } from "../Menus/Menus";
import { Restaurant } from "../Interfaces";
import kfc from "../Images/kfc.png";

describe("ReviewDisplay", () => {
    const KFC: Restaurant = {
        id: "41",
        name: "KFC",
        description:
            "Restaurant chain known for its buckets of fried chicken, plus combo meals & sides.",
        image: kfc,
        menu: KFCMenu,
        averageRating: 2.7,
        diningExperience: "Fast",
        priceRange: "$",
        reviews: []
    };

    test("ReviewDisplay renders correctly", () => {
        const { container } = render(<ReviewDisplayElement restaurant={KFC} />);

        expect(container).toBeInTheDocument;
    });
});
