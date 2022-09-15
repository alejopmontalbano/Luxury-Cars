import React from "react";
import { Link } from "react-router-dom";

const Item = ({marca, modelo, imagen, id}) => {

    return (
        <div className="card">
            <img src={imagen} className="card-img-top rounded images" alt={marca} />
            <div className="card-body">
                <h5 className="card-title"><b>{marca}</b></h5>
                <p className="card-title">{modelo}</p>
            </div>
            <Link to={"/auto/" + id}><button type="button" class="btn btn-outline-danger">Ver más</button></Link>
        </div>
    )

}
export default Item;