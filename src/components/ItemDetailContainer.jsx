import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "./json/productos.json";


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const obtenerProductos = new Promise((resolve) => {
            const productoObtenido = productos.filter((producto) => producto.id === id)
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
            <ItemDetail items={items} />
        </div>
    )
}

export default ItemDetailContainer;