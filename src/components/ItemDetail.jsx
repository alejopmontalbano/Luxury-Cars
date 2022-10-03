import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./context/Context";
import ItemCount from "./ItemCount";

const ItemDetail = ({items}) => {
    const {agregarItem} = useContext(cartContext);
    const [cantidad, setCantidad] = useState(0);
    
    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        agregarItem(items, cantidad);
    }

    return (
        <div className="card ItemDetailContainer">
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
                {cantidad === 0 ? 
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                 : 
                    <Link to={"/carrito"} className="btn btn-danger">Ir al carrito</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;