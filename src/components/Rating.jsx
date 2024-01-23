import React from "react";
import orangeStar from "../images/orange-star.svg";
import greyStar from "../images/grey-star.svg";

function Rating({ rating }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img src={orangeStar} alt="" key={i} />);
    }
    for (let i = rating; i < 5; i++) {
        stars.push(<img src={greyStar} alt="" key={i} />);
    }
    return <>{stars}</>;
}

export default Rating;
