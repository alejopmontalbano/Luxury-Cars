import React from "react";
import logoAudi from '../assets/img/logos/audi-logo.png';
import logoBmw from '../assets/img/logos/bmw-logo.jpg';
import logoFord from '../assets/img/logos/ford-logo.jpg';
import logoMercedesBenz from '../assets/img/logos/mercedes-benz-logo.jpg';
import logoPeugeot from '../assets/img/logos/peugeot-logo.jpg';
import { Link } from 'react-router-dom';

function Marcas () {
    return (
        <div className="marcasContainer">
            <h1>Buscá tu marca favorita</h1>

            <div className="marcasCardContainer">

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <Link to={"/marca/audi"}><img src={logoAudi} className="card-img-top logo-marca" alt="Audi" /></Link>
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                   <Link to={"/marca/bmw"}><img src={logoBmw} className="card-img-top logo-marca" alt="BMW" /></Link>
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <Link to={"/marca/mercedez-benz"}><img src={logoMercedesBenz} className="card-img-top logo-marca" alt="Mercedes Benz" /></Link>
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <Link to={"/marca/ford"}><img src={logoFord} className="card-img-top logo-marca" alt="Ford" /></Link>
                </div>

                <div className="card cardMarcas" style={{width: '12rem'}}>
                    <Link to={"/marca/peugeot"}><img src={logoPeugeot} className="card-img-top logo-marca" alt="Peugeot" /></Link>
                </div>
            </div>

        </div>
    )
}

export default Marcas;