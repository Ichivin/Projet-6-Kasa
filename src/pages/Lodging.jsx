import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import lodgings from "../data/logement.json";
import Accordion from "../components/Accordion";
import Rating from "../components/Rating";

function Lodging() {
    const { id } = useParams();
    const [lodging, setLodging] = useState({});
    useEffect(() => {
        setLodging(lodgings.find((item) => item.id === id));
    }, [id]);
    return (
        <div className="lodging">
            <h1 className="lodging__title">{lodging.title}</h1>
            <h2 className="lodging__location">{lodging.location}</h2>
            <ul className="lodging__tags">{lodging.tags && lodging.tags.map((tag, i) => <li key={i}>{tag} </li>)}</ul>
            {lodging.host && (
                <div className="lodging__profil">
                    <p className="lodging__host-name">{lodging.host.name}</p>
                    <img className="lodging__host-picture" src={lodging.host.picture} alt={lodging.host.name} />
                </div>
            )}
            <div className="loding__rating">
                <Rating rating={lodging.rating} />
            </div>
            <div className="lodging__accordions">
                <Accordion title={"Description"}>
                    <p className="lodging__description">{lodging.description}</p>
                </Accordion>
                <Accordion title={"Équipements"}>
                    <p className="lodging__equipments">{lodging.equipments}</p>
                </Accordion>
            </div>
        </div>
    );
}

export default Lodging;
