import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import productos from "./json/productos.json";


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const obtenerProductos = new Promise((resolve) => {
            const productoObtenido = productos.find((producto) => producto.id === 3)
            setTimeout(() => {
                resolve(productoObtenido);
            },2000)
        });

        obtenerProductos.then((respuesta) => {
            setItems(respuesta);
            });
        }, []);


    return (
        <div className="containerItemDetailContainer">
            <h1 className="text-center">Detalle del Producto</h1>
            <ItemDetail items={items} />
        </div>
    )
}

export default ItemDetailContainer;