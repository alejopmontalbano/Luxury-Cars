import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList.jsx";
import productos from "./json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        const obtenerProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            },3000)
        });

        obtenerProductos.then((respuesta) => {
            setItems(respuesta);
            });
        }, []);

    

    return (
        <div className="containerItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;