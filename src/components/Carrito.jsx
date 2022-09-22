import React from "react";
import { useContext } from 'react';
import { cartContext } from "../components/context/Context.jsx";

const Carrito = () => {

    const { carrito, eliminarProducto, limpiarCarrito } = useContext(cartContext);

    return(
        <div>
            <h2>Carrito de compras</h2>
            {carrito.map((producto) => (
                <div key={producto.id}>
                    <p>{producto.marca}</p>
                    <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={limpiarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Carrito;