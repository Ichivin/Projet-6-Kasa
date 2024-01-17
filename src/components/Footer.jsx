import React from "react";
import logo_white from "../images/logo-white.svg";

function Footer() {
    return (
        <footer className="footer">
            <img src={logo_white} className="footer__logo" alt="logo KASA" />
            <p className="footer__text">© 2024 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
