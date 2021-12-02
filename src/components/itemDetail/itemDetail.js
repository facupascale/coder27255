import React from 'react'
import ItemCount from '../itemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="container-itm" key={item.id}>
                <h2>Titulo</h2>
                <h2>{item.title}</h2>
                <div className="img-wrapper">
                    <img alt={item.title} src={item.image} />
                </div>
                <h3>{item.price}</h3>
                <ItemCount
                    stock={item.stock}
                    initial={1}
                    onAdd={() => {
                        alert('Agregado al carrito')
                    }}
                    ctaText={ item.ttle && `Agregar ${item.title} al carrito`}
                />
            </div>
            )
}

export default ItemDetail;