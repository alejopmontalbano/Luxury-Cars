import React from "react";
import logo from "../assets/img/iconos/logo.png"

const CompraExitosa = ({id}) => {
    return(
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1>¡Gracias por la Compra!</h1>
                <h2>¡Tu auto esta en camino!</h2>
                <p><img src={logo} alt="luxurycars" width="180" /></p>
                <p>La Orden de Compra de Compra se generó con el ID: <b>{id}</b></p>
            </div>
        </div>
    )
}

export default CompraExitosa;