import React from "react";
import imgCarrito from "../assets/img/iconos/carrito-de-compras.png"
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

function NavBar () {

return (
    <header>
        <CartWidget />
        <div className="links">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Buscá tu auto</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Contactános</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>¿Quienes somos?</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Sucursales</Link>
                </li>
            </ul>
        </div>
        <div className="carrito">
            <button type="button" class="btn position-relative">
                <img src={imgCarrito} className="logoCarrito"/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    </header>
)
}

export default NavBar;