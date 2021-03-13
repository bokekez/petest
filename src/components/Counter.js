import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(() => {
        return 0;
    })
    
    const reduceCount = () => {
        setCount(prevCount => prevCount -1)
    }
    const addCount = () => {
        setCount(prevCount => prevCount +1)
    }
    // useEffect

    return(
        <div>
            <button onClick={reduceCount}>-</button>
            <span>{count}</span>
            <button onClick={addCount}>+</button>
        </div>
    )
}



export default Counter;