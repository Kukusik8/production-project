import React, { useState } from 'react';
import  classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCounter] = useState(0)
      
    const increment = () => {
        setCounter(count + 1)
        console.log('ewewq')

    }
    const decrement = () => {
        setCounter(count - 1)
        console.log('ewewq')

    }
        return (
            <div className={classes.btn}>
                <h1>{count}</h1>
                <button className={classes.btns} onClick={increment}>plus</button>
                <button className={classes.btns} onClick={decrement}>minus</button>

            </div>
        )
};

