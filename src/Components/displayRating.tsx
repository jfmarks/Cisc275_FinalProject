import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

interface Props {
    rating: number;
}

export default function StarRating({ rating }: Props): JSX.Element {
    const starArray = [];

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
        starArray.push(
            <FontAwesomeIcon key={i} icon={solidStar} className="star" />
        );
    }

    // Render half star if applicable
    if (hasHalfStar) {
        starArray.push(
            <FontAwesomeIcon
                key={fullStars}
                icon={halfStar}
                className="half-star"
            />
        );
    }

    // Render empty stars
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
        starArray.push(
            <FontAwesomeIcon
                key={fullStars + i}
                icon={regularStar}
                className="extra-star"
            />
        );
    }

    return (
        <div className="star-rating">
            {starArray}
            <span className="average-rating">{rating.toFixed(1)}</span>
        </div>
    );
}
