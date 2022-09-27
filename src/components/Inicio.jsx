import React from "react";
import Marcas from '../components/Marcas.jsx';
import Sucursales from '../components/Sucursales';
import Contactanos from '../components/Contáctanos';

const Inicio = () => {
    return(
        <div>
            <Marcas />
            <Contactanos />
            <Sucursales />
        </div>
    )
}

export default Inicio;