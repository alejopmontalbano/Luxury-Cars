import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
/* import productos from "./json/productos.json"; */

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {marcaAuto} = useParams();

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
        }

    useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection(db, "productos");
            const queryItems = marca ? query(itemsCollection, where("marca", "==", marca)) : itemsCollection;
            getDocs(queryItems).then((snapShot) => {
                if (snapShot.size > 0) {
                    setItems(snapShot.docs.map(item => ({marca: item.marca, ...item.data()})));
                }
            })

        }, [marca]);
        /* let marca = "";

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
            }})*/
         

    

    return (
        <div className="containerItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;