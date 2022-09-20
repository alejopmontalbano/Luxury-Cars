import React from "react";
import imgContactanos from "../assets/img/contactanos-principal.jpg";
import wpp from "../assets/img/iconos/whatsapp.png";

function Contactanos() {
    return(
        <div className="contactanosContainer">
            <img src={imgContactanos} alt="" />
            <div >
                <div className="contactanosTexto">
                    <h1 className="contactanosTextoHijo">¿Necesitás ayuda?</h1>
                    <h2 className="contactanosTextoHijo">¡Contáctanos!</h2>
                    <p className="contactanosTextoHijo">Contestamos todas tus dudas de manera clara, rápida y directa. LLamnos al <b>0800-344-1631</b></p>
                </div>
                <div className="contactanosBotones">
                    <span className="contactanosBotonesHijo rounded"><img src={wpp} alt="" className="wpp"/></span>
                    <button className="contactanosBotonesHijo btn btn-danger" type="button">Mandanos un e-mail</button>
                </div>
            </div>
        </div>
    )
}

export default Contactanos;