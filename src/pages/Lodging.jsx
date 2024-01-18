import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import lodgings from "../data/logement.json";

function Lodging() {
    const { id } = useParams();
    const [lodging, setLodging] = useState({});
    useEffect(() => {
        setLodging(lodgings.find((item) => item.id === id));
    }, [id]);
    return (
        <div>
            <h1>{lodging.title}</h1>
            <h2>{lodging.location}</h2>
            <ul>{lodging.tags && lodging.tags.map((tag, i) => <li key={i}>{tag} </li>)}</ul>
            {lodging.host && (
                <div>
                    <p>{lodging.host.name}</p>
                    <img src={lodging.host.picture} alt={lodging.host.name} />
                </div>
            )}
        </div>
    );
}

export default Lodging;
