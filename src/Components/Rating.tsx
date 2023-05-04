import { useState } from "react";
import { Button } from "react-bootstrap";
import { Restaurant } from "../Interfaces";
import RestaurantList from "./RestaurantList";
import CurrentUser from "../CurrentUser";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    function numbersToStars(num: number): string {
        let stars = "";
        if (value == 1) {
            stars = "⭐️";
        }
        if (value == 2) {
            stars = "⭐️⭐️";
        }
        if (value == 3) {
            stars = "⭐️⭐️⭐️";
        }
        if (value == 4) {
            stars = "⭐️⭐️⭐️⭐️";
        }
        if (value == 5) {
            stars = "⭐️⭐️⭐️⭐️⭐️";
        }
        return stars;
    }
    return (
        <span>
            <Button onClick={() => setValue(1 + value)} disabled={value === 5}>
                Click to Add a Star
            </Button>
            {numbersToStars}
        </span>
    );
}
