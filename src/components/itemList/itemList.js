import React from 'react'
import Item from "./item.js";
import "./itemList.css";
        
export default function ItemList({products}) {
    return (
        <div className='container-flex'>
        {products &&
             products.map((prod) =>
            <Item             
              item={prod} 
              key={prod.id}
            />
        )}
        </div>
    )
}