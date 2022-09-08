import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {id:1, marca: "Audi", modelo: "A1", km: "0", año: "2022", precio: "18000", imagen: "../assets/img/productos/audi/audi-a1.jpg"},
            {id:2, marca: "BMW", modelo: "135i", km: "0", año: "2022", precio: "22000", imagen: "./assets/img/productos/bmw/bmw-135.jpg"},
            {id:3, marca: "Mercedes-Benz", modelo: "Clase C", km: "0", precio: "90000", año: "2022", imagen: "./assets/img/productos/mercedes benz/benz-claseC.jpeg"},
            {id:4, marca: "Ford", modelo: "Mustang", km: "0", año: "2022", precio: "70000", imagen: "./assets/img/productos/ford/ford.jpg"},
            {id:5, marca: "Peugeot", modelo: "208 GT", km: "0", año: "2022", precio: "11000", imagen: "./assets/img/productos/peugeot/peugeot-208-4.png"},
        ];

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