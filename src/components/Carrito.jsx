import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { cartContext } from "../components/context/Context.jsx";
import tacho from "../assets/img/iconos/contenedor-de-basura.png";

const Carrito = () => {

    const { carrito, eliminarProducto, limpiarCarrito, totalCarrito, sumarProductos  } = useContext(cartContext);

    return(
        <div className="container">

            {(totalCarrito() > 0) ?
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={"5"} className="text-end">
                                <Link onClick={() => {limpiarCarrito()}}>
                                    <button className="btn fondo_rojo" title="Vaciar Carrito">Vaciar Carrito <img src={tacho} alt="Vaciar Carrito" width="16" /></button>
                                </Link>
                            </td>
                        </tr>
                        {carrito.map(item => (
                            <tr key={item.id}>
                                <td className="text-start"><img src={item.imagen} alt={item.modelo} title={item.modelo} width="120" /></td>
                                <td className="text-start align-middle">{item.marca}</td>
                                <td className="text-start align-middle">{item.modelo}</td>
                                <td className="text-end align-middle">${item.precio}</td>
                                <td className="text-end align-middle">
                                    <Link onClick={() => {eliminarProducto(item.id)}}><img src={tacho} alt="Eliminar Producto" title="Eliminar Producto" width="24" /></Link>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="text-end fw-bold">Total a Pagar</td>
                            <td className="text-end fw-bold">${sumarProductos()}</td>
                            <td className="text-end">
                                <Link to={"/checkout"} title="Finalizar Compra">
                                    <button className="btn fondo_naranja">Finalizar Compra</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                : <div className="text-center">
                    <div className="alert alert-danger text-center" role="alert">¡No hay productos en tu carrito!</div>
                    <Link to={"/marcas"}><button className="btn btn-outline-danger ">¡Buscá tu auto YA!</button></Link>
                </div>
            }
        </div>
    )
}

export default Carrito;