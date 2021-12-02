import React, { useState, useEffect } from 'react'
import ItemList from './itemList'

export default function ItemListContainer({ text }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=> {               
                res.json()            
                .then(json=> {
                    setData(json)
                })
            })
            .catch(error => console.log(error))     
    }, []) 


    return (     
        <> 
            <span>{text}</span>
            <ItemList products={data} />
        </>
    )
}