import React from "react";
import { useState } from "react";


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
            <div className="input-group incrementador">
                <input type="button" className="btn btn-outline-danger" value="-" onClick={() => {restarCantidad(cantidad - 1)}} />
                <input type="text" className="form-control text-center" value={cantidad} />
                <input type="button" className="btn btn-outline-danger" value="+" onClick={() => {aumentarCantidad(cantidad + 1)}} />
            </div>
            <input type="button" className=" boton-agregar btn btn-outline-danger" value="Agregar al Carrito" onClick={() => {agregarAlCarrito()}} />
            <div className="ItemCount-stock">
                <p><b>Productos agregados</b>: {itemAdd}</p>
                <p><b>Stock disponible</b>: {itemStock}</p>
            </div>
        </div>
    )
}

export default ItemCount;