/* eslint-disable no-extra-parens */
import React from "react";
import { Restaurant } from "../Interfaces";

export default function ReviewDisplayElement({
    restaurant
}: {
    restaurant: Restaurant;
}): JSX.Element {
    return (
        <p>
            {restaurant.averageRating} {restaurant.reviews}
        </p>
    );
}
