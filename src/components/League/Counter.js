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
        <div>
            <Button onClick={handleIncrease}>+</Button>
            {count}
            <Button onClick={handleDecrease} disabled={count > 0 ? false : true}>-</Button>
        </div>
    )
}
