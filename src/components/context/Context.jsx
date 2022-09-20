import React, { useState, createContext } from "react";

export const cartContext = createContext();

const Provider = ({Children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarItem = (item, cantidad) => {
        if (consultarCarrito(item.id)) {
            let producto = carrito.find(x => x.id === item.id);
            carrito[carrito.indexOf(producto)].cantidad += cantidad;
            setCarrito([...carrito])
        } else {
            setCarrito([...carrito, {...item, cantidad:cantidad}]);
        }
    }

    const limpiarCarrito = () => {
        setCarrito([]);
    }

    const consultarCarrito = (id) => {
        return carrito.some(item => item.id === id);
    }

    const totalCarrito = () => {
        return carrito.reduce((total, item) => total += item.cantidad, 0)
    }

    return(
        <cartContext.Provider value={{carrito, agregarItem, limpiarCarrito, totalCarrito}}>
            {Children}
        </cartContext.Provider>
    )
}

export default Provider;

