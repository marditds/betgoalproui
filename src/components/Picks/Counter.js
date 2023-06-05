import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Counter.css'

export const Counter = ({ value, onValueChange }) => {

    const [count, setCount] = useState(value);

    useEffect(() => {
        setCount((preVal) => value);
    }, [value]);

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

    const handleValueChange = (e) => {
        setCount((preVal) => e.target.value)
        console.log('THIS IS TARGET', e.target.value);
    }

    // const handleClickInc = () => {
    //     handleIncrease();
    //     onValueChange(value + 1);
    // }

    // const handleClickDec = () => {
    //     handleDecrease();
    //     onValueChange(value - 1);
    // }

    return (
        <div className='d-flex'>
            <Form.Control value={count} onChange={handleValueChange}
                type='number' readOnly
                className='counter--body team--points p-0 my-0 mx-1
                 d-none
                 ' />

            <div className='d-grid d-sm-flex'>
                <Button onClick={handleIncrease} className='counter--btn'>+</Button>
                <p className='counter--body team--points p-0 my-2 my-sm-0 mx-1'>
                    {count}
                </p>
                <Button onClick={handleDecrease} className='counter--btn' disabled={count > 0 ? false : true}>-</Button>
            </div>

            {/* <Button onClick={handleReset}>RESET</Button> */}
        </div>
    )
}
