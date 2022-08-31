import React from "react";
import logoAudi from './assets/img/logos/audi-logo.jpg';
import logoBmw from './assets/img/logos/bmw-logo.jpg';
import logoFord from './assets/img/logos/ford-logo.jpg';
import logoMercedesBenz from './assets/img/logos/mercedes-benz-logo.jpg';
import logoPeugeot from './assets/img/logos/peugeot-logo.jpg';
import logoPorsche from './assets/img/logos/porsche-logo.jpg';
import logoToyota from './assets/img/logos/toyota-logo.jpg';
import logoVolkswagen from './assets/img/logos/volkswagen-logo.jpg';


function ItemListContainer () {
    return (
        <div className="listContainer">
            <h1>Busca tu marca favorita</h1>

            <div className="cardContainer">

                <div className="card" style={{width: '30rem'}}>
                    <img src={logoAudi} className="card-img-top" alt="Audi" />
                </div>

                <div className="card" style={{width: '30rem'}}>
                    <img src={logoBmw} className="card-img-top" alt="BMW" />
                </div>

                <div className="card" style={{width: '30rem'}}>
                    <img src={logoFord} className="card-img-top" alt="Ford" />
                </div>

                <div className="card" style={{width: '30rem'}}>
                    <img src={logoMercedesBenz} className="card-img-top" alt="Mercedes Benz" />
                </div>

                <div className="card" style={{width: '30rem'}}>
                    <img src={logoPeugeot} className="card-img-top" alt="Peugeot" />
                </div>

                <div className="card" style={{width: '30rem'}}>
                    <img src={logoPorsche} className="card-img-top" alt="Porsche" />
                </div>

                <div className="card" style={{width: '30rem'}}>
                    <img src={logoToyota} className="card-img-top" alt="Toyota" />
                </div>

                <div className="card" style={{width: '30rem'}}>
                    <img src={logoVolkswagen} className="card-img-top" alt="Volkswagen" />
                </div>

            </div>

        </div>
    )
}

export default ItemListContainer;