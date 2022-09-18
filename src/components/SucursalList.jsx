import React from "react";
import Sucursal from "./Sucursal";

function SucursalList({sucursales}) {
    return(
        <div className="containerSucursalesList">
            {sucursales.map(sucursales => (
                <div key={sucursales.id}>
                    <Sucursal id={sucursales.id} sucursal={sucursales.sucursal} direccion={sucursales.direccion} inventario={sucursales.inventario}/>
                </div>
            ))}
        </div>
    )
}

export default SucursalList;