import React from "react";
import logo from "../images/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <img src={logo} className="header__app-logo" alt="logo KASA" />
            <nav className="nav">
                <ul className="header__links">
                    <li>
                        <NavLink
                            //className={`header__link ${location.pathname === "/" && "header__link-underline"}`}
                            className={({ isActive }) =>
                                isActive ? "header__link header__link-underline" : "header__link"
                            }
                            to={"/"}
                        >
                            Accueil
                        </NavLink>
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
