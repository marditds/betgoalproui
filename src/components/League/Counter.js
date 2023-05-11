import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const Counter = ({ value }) => {

    const [count, setCount] = useState(value);
    const [btnStatus, setBtnStatus] = useState(true);

    const handleIncrease = () => {
        setCount((preVal) => preVal + 1);

        if (count > 0) {
            setBtnStatus((preVal) => false);
        }
    }

    const handleDecrease = () => {
        if (count <= 0) {
            setBtnStatus((preVal) => true);
            return;
        } else {
            setCount((preVal) => preVal - 1);
        }
    }

    return (
        <div>
            <Button onClick={handleIncrease}>+</Button>
            {count}
            <Button onClick={handleDecrease} disabled={btnStatus}>-</Button>
        </div>
    )
}
