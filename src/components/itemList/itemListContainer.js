import React, { useState, useEffect } from 'react'
import ItemList from './itemList'
import { useParams } from 'react-router';

//firebase imports
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore/lite';

export default function ItemListContainer({ text }) {
    const { categoryId } = useParams();

    const [data, setData] = useState(null)

    useEffect(() => {
        let products = [];
        const productsRef = collection(db, 'products');

        getDocs(productsRef)
            .then((res) => {
                products = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                });
            })
            .finally( () =>{
                setData(products)
            });
    }, [categoryId])


    return (
        <>
            <span>{text}</span>
            <ItemList products={data} />
        </>
    )
}