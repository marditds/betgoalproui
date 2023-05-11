import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Counter.css'

export const Counter = ({ value }) => {

    const [count, setCount] = useState(value);

    const handleIncrease = () => {
        setCount((preVal) => preVal + 1);
    }

    const handleDecrease = () => {
        if (count > 0) {
            setCount((preVal) => preVal - 1);
        } else {
            return;
        }

    }

    return (
        <div className='d-flex'>
            <Button onClick={handleIncrease} className='counter--btn'>+</Button>
            <p className='counter--body py-0 my-0 mx-1'>{count}</p>
            <Button onClick={handleDecrease} className='counter--btn' disabled={count > 0 ? false : true}>-</Button>
        </div>
    )
}
