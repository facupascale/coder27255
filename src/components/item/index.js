import React from 'react'

export default function Item(props) {
    const { products } = props

    return (
        <div className='container'>
        {products.map((prod) =>
            <div key={prod.id}>
                <span>{prod.title}</span>
                <img src={prod.image}/>
                <span>{prod.price}</span>
            </div>
        )}
        </div>
    )
}