import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src={logo} className="app-logo" alt="logo KASA" />
            <nav className="nav">
                <ul className="header__links">
                    <li>
                        <Link className="header__link" to={"/"}>
                            {" "}
                            Accueil{" "}
                        </Link>
                    </li>
                    <li>
                        <Link className="header__link" to={"/about"}>
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
