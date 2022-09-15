import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({items}) => {

    return (
        <div className=" card ItemDetailContainer" key={items.id}>
            <img src={items.imagen} className="card-img-top rounded images" alt={items.marca} />
            <div className="detallesContainer">
                <div className="card-body">
                    <h5 className="card-title"><b>{items.marca}</b></h5>
                    <p className="card-title">{items.modelo}</p>
                </div>
                <p className="card-text text-center precio"><b>U$D {items.precio}</b></p>
                <div className="Item-Estado-Auto">
                    <p className="card-text text-center"><b>Km: </b>{items.km}</p>
                    <p className="card-text text-center"><b>Año: </b>{items.anio}</p>
                </div>
                <ItemCount stock={10} initial={1} onAdd={0} />
            </div>
            
        </div>
    )
}

export default ItemDetail;