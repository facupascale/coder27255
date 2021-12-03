import React from 'react'
/* 
import { db } from '../firebase/config';
import { Timestamp, collection, addDoc, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore/lite'

import { useCartContext } from '../context/cartContext'

function createOrder(order) {
    const ordersRef = collection(db, 'orders');

    addDoc(ordersRef, order)
        .then( (res) =>{
            alert('gracias por tu compra, id: ' + res.id);
        })
}
 */
export default function Checkout() {
    /* const { cart } = useCartContext();

    const [order, setOrder] = React.useState({
        item : cart,
        buyer: "comision 27255",      
        date: Timestamp.fromDate(new Date())
    });
    
    function handleChange(event) {
        setOrder({ ...order, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        createOrder(order);
    }
 */
    return (
        <h1>TO DO</h1>
      /*   <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input onChange={()=>handleChange} type="text" name="buyer" />
                    </label>                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div> */
    )
}
