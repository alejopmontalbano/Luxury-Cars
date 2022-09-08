import React from "react";
import logoAudi from '../assets/img/logos/audi-logo.png';
import logoBmw from '../assets/img/logos/bmw-logo.jpg';
import logoFord from '../assets/img/logos/ford-logo.jpg';
import logoMercedesBenz from '../assets/img/logos/mercedes-benz-logo.jpg';
import logoPeugeot from '../assets/img/logos/peugeot-logo.jpg';
import logoPorsche from '../assets/img/logos/porsche-logo-2.jpg';
import logoToyota from '../assets/img/logos/toyota-logo.jpg';
import logoVolkswagen from '../assets/img/logos/volkswagen-logo.jpg';


function Marcas () {
    return (
        <div className="marcasContainer">
            <h1>Buscá tu marca favorita</h1>

            <div className="marcasCardContainer">

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <img src={logoAudi} className="card-img-top logo-marca" alt="Audi" />
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <img src={logoBmw} className="card-img-top logo-marca" alt="BMW" />
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <img src={logoMercedesBenz} className="card-img-top logo-marca" alt="Mercedes Benz" />
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <img src={logoPorsche} className="card-img-top logo-marca" alt="Porsche" />
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <img src={logoFord} className="card-img-top logo-marca" alt="Ford" />
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <img src={logoPeugeot} className="card-img-top logo-marca" alt="Peugeot" />
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <img src={logoToyota} className="card-img-top logo-marca" alt="Toyota" />
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <img src={logoVolkswagen} className="card-img-top logo-marca" alt="Volkswagen" />
                </div>

            </div>

        </div>
    )
}

export default Marcas;