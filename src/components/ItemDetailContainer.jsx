import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
            const db = getFirestore();
            const response = doc(db, "productos", id);
            getDoc(response).then((snapShot) => {
                if (snapShot.exists()) {
                    setItems({id:snapShot.id, ...snapShot.data()});
                }
            })
        }, [id]);
        
    return (
        <div className="containerItemDetailContainer">
            <ItemDetail items={items} />
        </div>
    )
}

export default ItemDetailContainer;