import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import productos from "./json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {marcaAuto} = useParams();

    useEffect(() => {
        let marca = "";

        if (marcaAuto === "audi") {
            marca = "Audi";
        } else if (marcaAuto === "bmw") {
            marca = "BMW";
        } else if (marcaAuto === "mercedes") {
            marca = "Mercedes";
        } else if (marcaAuto === "ford") {
            marca = "Ford";
        } else if (marcaAuto === "peugeot") {
            marca = "Peugeot";
        } else {
            marca = "todasLasMarcas";
        }

        const obtenerProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            },500)
        });

        obtenerProductos.then((respuesta) => {
            if (marca === "todasLasMarcas") {
                setItems(respuesta);
            } else {
                const array_autos = respuesta.filter(producto => producto.marca === marca);
                setItems(array_autos);
            }})
        }, [marcaAuto]);

    

    return (
        <div key={items.id} className="containerItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;