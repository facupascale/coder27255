import React, {useState} from 'react'
import Item from '../item'

export default function ItemListContainer({text}) {
    const [data, setData] = useState([])

    
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setData(json))
            .catch(error => console.log(error))
    console.log(data, 'soy data')
    return (
        <>
            <span>{text}</span>
            <Item products={data}/>
        </>
    )
}