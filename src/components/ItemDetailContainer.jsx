import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
/* import productos from "./json/productos.json"; */
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const {marca} = useParams();

    useEffect(() => {

            const db = getFirestore();
            const response = doc(db, "productos", marca);
            getDoc(response).then((snapShot) => {
                if (snapShot.exists()) {
                    setItems({marca:snapShot.marca, ...snapShot.data()});
                }
            })

        }, [marca]);
        /* const obtenerProductos = new Promise((resolve) => {
            const productoObtenido = productos.filter((producto) => producto.id === id)
            setTimeout(() => {
                resolve(productoObtenido);
            },2000)
        });

        obtenerProductos.then((respuesta) => {
            setItems(respuesta);
            }); */
        


    return (
        <div className="containerItemDetailContainer">
            <ItemDetail items={items} />
        </div>
    )
}

export default ItemDetailContainer;