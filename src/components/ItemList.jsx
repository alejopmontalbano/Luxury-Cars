import React from "react";
import Item from "./Item.jsx";

function ItemList({items}) {
    return (
        <div>
            {items.map(item => (
                <div key={item.id} className="containerItemList">
                    <Item marca={item.marca} modelo={item.modelo} km={item.km} año={item.año} precio={item.precio} imagen={item.imagen}/>
                </div>
            ))}
        </div>
    )
}
export default ItemList;