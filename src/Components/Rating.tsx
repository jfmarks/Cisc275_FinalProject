import { useState } from "react";
import { Button } from "react-bootstrap";
import { Restaurant } from "../Interfaces";
import RestaurantList from "./RestaurantList";
import CurrentUser from "../CurrentUser";

export function Rating(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    function numbersToStars(num: number): string {
        let stars = "";
        if (num === 1) {
            stars = "⭐️";
        }
        if (num === 2) {
            stars = "⭐️⭐️";
        }
        if (num === 3) {
            stars = "⭐️⭐️⭐️";
        }
        if (num === 4) {
            stars = "⭐️⭐️⭐️⭐️";
        }
        if (num === 5) {
            stars = "⭐️⭐️⭐️⭐️⭐️";
        }
        return stars;
    }
    return (
        <span>
            <Button onClick={() => setValue(1 + value)} disabled={value === 5}>
                Click to Add a Star
            </Button>
            {numbersToStars(value)}
        </span>
    );
}
