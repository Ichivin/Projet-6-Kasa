import React, { useState } from "react";
import arrow from "../images/arrow-back.svg";

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion">
            <div className="accordion__header">
                <h2 className="accordion__title">{title}</h2>
                <img
                    onClick={() => setIsOpen(!isOpen)}
                    src={arrow}
                    className={isOpen ? "accordion__arrow-up" : "accordion__arrow-down"}
                    alt=""
                />
            </div>
            <div
                className={`accordion__children ${
                    isOpen ? "accordion__children-visible" : "accordion__children-hidden"
                }`}
            >
                {children}
            </div>
        </div>
    );
}

export default Accordion;
