import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [data, setData] = useState(null);

  const itemId = useParams().prodId;
  console.log(useParams);
  
  const baseURL='https://fakestoreapi.com/';
  const itemPath=`${baseURL}/products/${itemId}`;

  useEffect(() => {        
        fetch(itemPath)
            .then(res=> {               
                res.json()
                .then(json=> {
                    console.log(json);
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
