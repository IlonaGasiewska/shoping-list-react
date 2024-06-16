import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Navbar.css"


function Navbar() {

    const location = useLocation()

    const user = localStorage.getItem("user")

    const handleLogout = () => {
        localStorage.removeItem("user");
    };

    return (
        <div className="navbar">
            {location.pathname === "/" ? (
                <>
                    <Link to="/signIn"> Logowanie </Link>
                    <Link to="/signUp"> Rejestracja</Link>
                </>
            ) : (
                <>
                    <p>Witaj {user}</p>
                    <Link onClick={handleLogout} to="/">Wyloguj</Link>
                </>
            )}
        </div>
    )
}

export default Navbar;
