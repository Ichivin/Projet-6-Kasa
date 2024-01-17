import React from "react";

function Banner({ img, text }) {
    return (
        <div className="banner">
            <img src={img} className="banner__img" alt="" />
            <div className="banner__background">
                <h1 className="banner__text">{text} </h1>
            </div>
        </div>
    );
}

export default Banner;
