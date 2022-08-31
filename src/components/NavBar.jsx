import React from "react";
import imgCarrito from "./assets/img/iconos/carrito-de-compras.png"
import CartWidget from "./CartWidget";

function NavBar () {

return (
    <header>
        <CartWidget />
        <div className="links">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Buscá tu auto</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contactános</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">¿Quienes somos?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sucursales</a>
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