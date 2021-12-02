import React from 'react'
import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({ item }) => {
    return (
            <div className="list-item" key={item.id}>
                <h2>{item.title}</h2>
                <div className="img-wrapper">
                    <img alt={item.title} src={item.image} />
                </div>
                <h3>{item.price}</h3>
                <Link to={`/producto/${item.id}`}>
                    <button>Ver detalle</button>
                </Link>
            </div>
            )
}

export default Item;