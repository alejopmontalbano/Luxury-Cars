import React, { useState, createContext } from "react";

export const cartContext = createContext();

const Provider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarItem = (item, cantidad) => {
        const producto = {...item, cantidad };
        if (consultarCarrito(producto.id)) {
            sumarCantidad(producto);
        } else {
            setCarrito([...carrito, producto]);
        }
    }

    const consultarCarrito = (id) => {
        return carrito.some(item => item.id === id);
    }

    const sumarCantidad = (producto) => {
        const actualizacionCarrito = carrito.map((productoAgregado) => {
            if (producto.id === productoAgregado.id) {
                const productoIngresado = {...productoAgregado, cantidad: producto.cantidad,};
                return productoIngresado;
            } else {
                return productoAgregado;
            };
        });
        setCarrito(actualizacionCarrito);
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    }

    const totalCarrito = () => {
        const productosEnElCarrito = [...carrito];
        let contador = 0;
        productosEnElCarrito.forEach((producto) => {
            contador = contador + producto.cantidad;
        });
        return contador;
    }

    const sumarProductos = () => {
        return carrito.reduce((total, item) => total += item.cantidad * item.precio, 0)
    }

    const eliminarProducto = (id) => {
        const productoAEliminar = carrito.filter((producto) => producto.id !== id);
        setCarrito(productoAEliminar);
    }

    return(
        <cartContext.Provider value={{carrito, agregarItem, limpiarCarrito, totalCarrito, eliminarProducto, sumarProductos}}>
            {children}
        </cartContext.Provider>
    )
}

export default Provider;

