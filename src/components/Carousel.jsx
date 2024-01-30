import React, { useState } from "react";
import arrowRight from "../images/arrow-right.svg";
import arrowLeft from "../images/arrow-left.svg";

function Carousel({ pictures }) {
    const [current, setCurrent] = useState(0);
    return (
        <div className="carousel">
            <img className="carousel__img" alt="" src={pictures[current]} />
            {pictures.length > 1 ? (
                <>
                    <img
                        onClick={() => {
                            setCurrent(current === 0 ? pictures.length - 1 : current - 1);
                        }}
                        src={arrowLeft}
                        alt=""
                        className="carousel__arrow-left"
                    />
                    <img
                        onClick={() => {
                            setCurrent(current === pictures.length - 1 ? 0 : current + 1);
                        }}
                        src={arrowRight}
                        alt=""
                        className="carousel__arrow-right"
                    />{" "}
                </>
            ) : (
                ""
            )}
            <p className="carousel__numbering">
                {current + 1}/{pictures.length}
            </p>
        </div>
    );
}

export default Carousel;
