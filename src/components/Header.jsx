import React from "react";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <img src={logo} className="app-logo" alt="logo KASA" />
            <nav className="nav">
                <ul className="header__links">
                    <li>
                        <Link
                            className={`header__link ${location.pathname === "/" && "header__link-underline"}`}
                            to={"/"}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`header__link ${location.pathname === "/about" && "header__link-underline"}`}
                            to={"/about"}
                        >
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
