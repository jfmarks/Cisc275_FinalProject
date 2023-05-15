/* eslint-disable no-extra-parens */
import React from "react";

export default function ReviewDisplayElement({
    restaurantReviews
}: {
    restaurantReviews: string[];
}): JSX.Element {
    return (
        <div>
            {restaurantReviews.map((review) => (
                <p key={restaurantReviews.indexOf(review)}>{review}</p>
            ))}
        </div>
    );
}
