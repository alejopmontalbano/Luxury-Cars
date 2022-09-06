import React from "react";
import { useState } from "react";
import mercedes from "../assets/img/productos/mercedes benz/benz-claseC.jpeg"


function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const restarCantidad = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }

    const aumentarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarAlCarrito = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }
    }

    return (
        <div className="itemCount">
            <h2 className="text-center">Carrito de compras</h2>
            <div className="card" style={{width: '30rem'}}>
                <img src={mercedes} className="card-img-top" alt="mercedes"/>
                <div className="card-body">
                    <h5 className="card-title">Mercedes Benz - Clase C</h5>
                    <p className="card-text">U$D 55.000</p>
                </div>
                <div className="input-group">
                    <input type="button" className="btn btn-outline-danger" value="-" onClick={() => {restarCantidad(cantidad - 1)}} />
                    <input type="text" className="form-control text-center" value={cantidad} />
                    <input type="button" className="btn btn-outline-danger" value="+" onClick={() => {aumentarCantidad(cantidad + 1)}} />
                </div>
                <input type="button" className=" boton-agregar btn btn-outline-danger" value="Agregar al Carrito" onClick={() => {agregarAlCarrito()}} />
                <p><b>Productos agregados</b>: {itemAdd}</p>
                <p><b>Stock disponible</b>: {itemStock}</p>
            </div>
        </div>
    )
}

export default ItemCount;