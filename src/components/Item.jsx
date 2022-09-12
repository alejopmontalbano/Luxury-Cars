import React from "react";

const Item = ({marca, modelo, imagen}) => {

    return (
        <div className="card">
            <img src={imagen} className="card-img-top rounded images" alt={marca} />
            <div className="card-body">
                <h5 className="card-title"><b>{marca}</b></h5>
                <p className="card-title">{modelo}</p>
            </div>
            <button type="button" class="btn btn-outline-danger">Ver más</button>
        </div>
    )

}
export default Item;