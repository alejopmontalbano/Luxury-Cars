import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import imgSucursalPrincipal from "../assets/img/sucursales-principal.jpg";
import SucursalList from "./SucursalList.jsx";
import sucursalesDatos from "./json/sucursales.json";

function Sucursales() {

    const [sucursales, setSucursales] = useState([]); 

    useEffect(() => {
        const obtenerSucursales = new Promise((resolve) => {
            setTimeout(() => {
                resolve(sucursalesDatos);
            },1000)
        });

        obtenerSucursales.then((respuesta) => {
            setSucursales(respuesta);
            });
        }, []);

    return(
        <div id="sucursales" className="sucursalesContainer">
            <div className="principalSucursales">
                <div>
                    <h1>Visitá nuestras sucursales</h1>
                    <p className="veniAVer">Vení a ver tu auto</p>
                </div>
                <img src={imgSucursalPrincipal} alt="Sucusales" className="imgSucursalPrincipal"/>
            </div>
            < SucursalList sucursales={sucursales}/>
        </div>
    )
}

export default Sucursales;