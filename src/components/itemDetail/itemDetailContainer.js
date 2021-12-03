import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import useCartContext from "../../context/cartContext";

//firebase imports
import { db } from '../../firebase/config';
import { collection, doc, getDoc } from 'firebase/firestore/lite';

export default function ItemDetailContainer() {
  const [data, setData] = useState(null);
  
  const { cart } = useCartContext();

  const itemId = useParams().prodId;
     
  useEffect(() => {   
        const productsRef = collection(db, 'products');
        const docRef = doc(productsRef, itemId);

        getDoc(docRef)
          .then(doc => {
            setData({
              id: doc.id,
              ...doc.data()
            })
          })
          .catch(err => {
            console.error(err);
          });
    }, [itemId])

  return (
    <>
      {data?  
        <ItemDetail
            item={data}
        />
        : <small>CARGANDO . . .</small>
      }
    </>
  );
}
