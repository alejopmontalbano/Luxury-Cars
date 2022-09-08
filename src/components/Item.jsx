import React from "react";
import ItemCount from "./ItemCount";

const Item = ({marca, modelo, año, km, precio, imagen}) => {

    return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt={marca} />
            <div className="card-body">
                <div className="Item-Marca-Modelo">
                    <h5 className="card-title"><b>{marca}</b></h5>
                    <p className="card-title">{modelo}</p>
                </div>
                <p className="card-text text-center precio"><b>U$D {precio}</b></p>
                <div className="Item-Estado-Auto">
                    <p className="card-text text-center"><b>Km: </b>{km}</p>
                    <p className="card-text text-center"><b>Año: </b>{año}</p>
                </div>
            </div>
            <ItemCount stock={10} initial={1} onAdd={0} />
        </div>
    )

}
export default Item;