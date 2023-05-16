import React from "react";
import { render, screen } from "@testing-library/react";
import FixedHeader from "../Components/FixedHeader";

describe("FixedHeader Component Tests", () => {
    test("Renders name form", () => {
        const { getByLabelText } = render(<FixedHeader />);
        expect(getByLabelText(/Name/i)).toBeInTheDocument();
    });
});
