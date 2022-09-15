import React from "react";
import logo from "../assets/img/iconos/logo.png"
import { Link } from "react-router-dom";

function CartWidget () {
    return (
        <div>
            <Link to={"/"} className="home"><img src={logo} className="logoHome" alt="Luxury Cars" /></Link>
        </div>
    )
}

export default CartWidget;