import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import lodgings from "../data/logement.json";
import Accordion from "../components/Accordion";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";

function Lodging() {
    const { id } = useParams();
    const [lodging, setLodging] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const searchedLodging = lodgings.find((item) => item.id === id);
        if (searchedLodging === undefined) {
            navigate("/404");
        } else {
            setLodging(searchedLodging);
            setLoading(false);
        }
    }, [id]);

    return loading ? (
        <div>loading</div>
    ) : (
        <main className="lodging">
            <Carousel pictures={lodging.pictures} />
            <div className="lodging__wrapper">
                <div className="lodging__left">
                    <h1 className="lodging__title">{lodging.title}</h1>
                    <h2 className="lodging__location">{lodging.location}</h2>
                    <ul className="lodging__tags">
                        {lodging.tags.map((tag, i) => (
                            <li className="lodging__tags-background" key={i}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lodging__right">
                    <div className="lodging__profil">
                        <p className="lodging__host-name">{lodging.host.name}</p>
                        <img className="lodging__host-picture" src={lodging.host.picture} alt={lodging.host.name} />
                    </div>

                    <div className="lodging__rating">
                        <Rating rating={lodging.rating} />
                    </div>
                </div>
            </div>
            <div className="lodging__accordions">
                <Accordion title={"Description"}>
                    <p className="lodging__description">{lodging.description}</p>
                </Accordion>
                <Accordion title={"Équipements"}>
                    <ul className="lodging__equipments">
                        {lodging.equipments.map((equipment) => (
                            <li className="lodging__equipment" key={equipment}>
                                {equipment}
                            </li>
                        ))}
                    </ul>
                </Accordion>
            </div>
        </main>
    );
}

export default Lodging;
