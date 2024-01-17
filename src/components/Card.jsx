import React from "react";
import { Link } from "react-router-dom";

function Card({ id, title, img }) {
    return (
        <Link className="card" to={`/lodging/${id}`}>
            <div className="card__background">
                <h3 className="card__title">{title}</h3>
            </div>
            <img className="card__img" src={img} />
        </Link>
    );
}

export default Card;
