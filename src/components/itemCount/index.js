import React, {useState} from 'react'
import './itemCount.css'

export default function ItemCount({initial = 1,stock, onAdd, ctaText = "Finalizar"}) {    
    const [counter, setCounter] = useState(initial)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <div>
                <button className='button' onClick={decrement} disabled={counter === 0 ? true : false}>-</button>
                <span>{counter}</span>
                <button className='button' onClick={increment} disabled={counter === stock ? true : false}>+</button>
            </div>
            <button onClick={()=>onAdd(counter)}>{ctaText}</button>
        </div>
    )
}