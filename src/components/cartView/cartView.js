import React from 'react'
import useCartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';
import './cartView.css'

export default function CartView() {
    const {cart, removeItem, clearCart } = useCartContext()

    return (
        <div>
            {cart.map(prod => 
                <div className='prod-container'>
                    <h3 className='title'>{prod.item.title}</h3>
                    <div className='price-container'> 
                        <span className='cantidad-price'>{prod.cantidad}</span>
                        <span className='cantidad-price'>{prod.cantidad * prod.item.price}</span>
                    </div>
                    <button className='remove-button' onClick={() => removeItem(prod.item.id)}>Borrar producto</button>
                </div>
                )}
            {cart.length > 0
            ? <button onClick={() => clearCart()}>Vaciar carrito</button>    
            : <Link to='/'>Seguir de compras</Link>
            }
        
        </div>
    )
}