import { useState } from "react";
import { Button } from "react-bootstrap";
import { Restaurant } from "../Interfaces";
import RestaurantList from "./RestaurantList";
import CurrentUser from "../CurrentUser";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)} disabled={value === 5}>
                Click to Add a Star
            </Button>
            {value}
        </span>
    );
}
