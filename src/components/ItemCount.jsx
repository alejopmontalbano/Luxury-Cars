import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(initial);

    const restarCantidad = () => {
        contador > initial && setContador(contador - 1)
    }

    const aumentarCantidad = () => {
        contador < stock && setContador(contador + 1)
    }

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    return (
        <div className="itemCount">
            <div className="input-group incrementador">
                <input type="button" className="btn btn-outline-danger" value="-" onClick={restarCantidad} />
                <p>{contador}</p>
                <input type="button" className="btn btn-outline-danger" value="+" onClick={aumentarCantidad} />
            </div>
            <input type="button" className=" boton-agregar btn btn-outline-danger" value="Agregar al Carrito" onClick={agregarAlCarrito} />
            <div className="ItemCount-stock">
                <p><b>Stock disponible</b>: {stock}</p>
            </div>
        </div>
    )

}

export default ItemCount;