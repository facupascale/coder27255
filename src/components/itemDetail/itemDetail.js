import React from 'react'
import useCartContext from '../../context/cartContext';
import ItemCount from '../itemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    const { addItem, isInCart } = useCartContext()
    const handlerOnAdd = (counter) => {
        alert(counter)
        addItem({ cantidad: counter, item})
    }

    return (
        <div className="container-itm" key={item.id}>
                <h2>Titulo</h2>
                <h2>{item.title}</h2>
                <div className="img-wrapper">
                    <img alt={item.title} src={item.image} />
                </div>
                <h3>{item.price}</h3>
                {isInCart(item.id) 
                ? <Link to='/cart'>Finalizar compra</Link>
                : <ItemCount
                    stock={item.stock}
                    initial={1}
                    onAdd={handlerOnAdd}
                    ctaText={ item.ttle && `Agregar ${item.title} al carrito`}
                />
                }
            </div>
            )
}

export default ItemDetail;