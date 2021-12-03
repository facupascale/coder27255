import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import useCartContext from "../../context/cartContext";

export default function ItemDetailContainer() {
  const [data, setData] = useState(null);

  const { cart } = useCartContext();

  const itemId = useParams().prodId;
  
  const baseURL='https://fakestoreapi.com/';
  const itemPath=`${baseURL}/products/${itemId}`;
  
  console.log('cart context',cart);

  useEffect(() => {   
        fetch(itemPath)
            .then(res=> {     
                console.log('res->',res);          
                res.json()
                .then(json=> {
                  console.log('res.json()->',json);    
                    setData(json)
                })
            })
            .catch(error => console.log(error))     
    }, [itemPath])

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
