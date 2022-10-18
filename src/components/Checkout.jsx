import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { cartContext } from "./context/Context";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CompraExitosa from "./CompraExitosa.jsx";

function Checkout() {
    const { carrito, limpiarCarrito, totalCarrito, sumarProductos  } = useContext(cartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [ordenId, setOrdenId] = useState("");
    
    const enviarPedido = () => {
        if ((nombre !== "") && (email !== "") && (celular !== "")) {
            const comprador = {nombre: nombre, email: email, celular: celular};
            const productos = [];
            carrito.forEach(item => {
                productos.push({id: item.id, modelo: item.modelo, precio: item.precio})
            });

            const fecha = new Date();
            const fechaDeCompra = fecha.getDate() + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
            const ordenDeCompra = {comprador: comprador, productos: productos, fecha: fechaDeCompra, total: totalCarrito()};

            const db = getFirestore();
            const orderCollection = collection(db, "pedido");
            addDoc(orderCollection, ordenDeCompra).then(({id}) => {
                setOrdenId(id);
                limpiarCarrito();
            });
        }
    }

    return(
        <div className="container py-5">

            {totalCarrito() > 0 ?
            <div className="row">
                <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Celular</label>
                            <input type="text" className="form-control" id="celular" onInput={(e) => setCelular(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => {enviarPedido()}}>Generar pedido</button>
                </div>
                <div className="col-md-4">
                    <table className="table">
                        <tbody>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td className="text-start"><img src={item.imagen} alt={item.modelo} title={item.modelo} width="120" /></td>
                                    <td className="text-start align-middle">{item.modelo} x {item.cantidad}</td>
                                    <td className="text-end align-middle">${item.cantidad * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                <td className="text-end fw-bold">${sumarProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            : ordenId !== "" ? <CompraExitosa id={ordenId} /> : <div className="alert alert-danger text-center" role="alert">No se encontraron Productos!</div>}
        </div>
    )
}

export default Checkout;