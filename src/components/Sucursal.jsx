import React from "react";
import { Link } from "react-router-dom";

function Sucursal({id, sucursal, direccion, inventario}) {
    return(
        <div>
            <div className="card" key={id} style={{width: '30rem', height: '18rem'}}>
                <div className="card-body sucursalInfo">
                    <h5 className="card-title sucursalInfoHijos">{sucursal}</h5>
                    <p className="card-text sucursalInfoHijos">{direccion}</p>
                    <p className="card-text sucursalInfoHijos"><b>Inventario: +</b>{inventario}</p>
                </div>
                <Link to={"/"} className="btn btn-danger">Ver horarios</Link>
            </div>
        </div>
    )
}

export default Sucursal;