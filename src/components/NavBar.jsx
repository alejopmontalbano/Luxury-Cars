import React from "react";
import imgCarrito from "../assets/img/iconos/carrito-de-compras.png"
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import { cartContext } from "../components/context/Context.jsx";
import { useContext } from "react";

const NavBar = () => {

    const { totalCarrito } = useContext(cartContext);

    return (
        <header>
            <CartWidget />
            <div className="links">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/marcas"}>Buscá tu auto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/contactanos"}>Contactános</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/sucursales"}>Sucursales</Link>
                    </li>
                </ul>
            </div>
            <div className="carrito">

                <Link to={"/carrito"}>
                    <button type="button" className="btn position-relative">
                        <img src={imgCarrito} className="logoCarrito" alt="carrito"/>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalCarrito() > 0 ? totalCarrito() : ""}</span>
                    </button>
                </Link> 
            
            </div>
        </header>
    )
}

export default NavBar;