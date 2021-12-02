import React, {useState} from 'react'
import './itemCount.css'

export default function ItemCount() {
    const stock = 10
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <button className='button' onClick={decrement} disabled={counter == 0 ? true : false}>-</button>
            <span>{counter}</span>
            <button className='button' onClick={increment} disabled={counter == stock ? true : false}>+</button>
        </div>
    )
}