import React from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavItem = () => {
    return (
        <header className="bg-light shadow-sm">
            <div className="container d-flex justify-content-between align-items-center py-1">
                <a href="/" className="navbar-brand">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            width="100"
                            height="110"
                            className="rounded-circle"
                        />
                    </Link>
                </a>

                <nav>
                    <ul className="nav custom-nav">
                        <li className="custom-nav-item first">
                            <a href="/" className="nav-link">
                                <Link to="/">
                                    আওতাধীন সিটি কর্পোরেশন
                                </Link>
                            </a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="/" className="nav-link">
                                <Link to="/">
                                    আওতাধীন পৌরসভা
                                </Link>
                            </a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="/" className="nav-link">
                                <Link to="/">
                                    আওতাধীন ইউনিয়ন
                                </Link>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavItem;
