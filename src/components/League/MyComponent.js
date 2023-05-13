import React from 'react'

export const MyComponent = () => {

    const [value, setValue] = useState(0);
    const [resetKey, setResetKey] = useState(0);


    const handleReset = () => {
        setValue((preVal) => preVal = 0);
        setResetKey((preVal) => preVal + 1);
    }

    return (
        <div>
            <Counter key={`${value}-${resetKey}`} value={value} />
            <Counter key={`${value}-${resetKey}`} value={value} />
            <Counter key={`${value}-${resetKey}`} value={value} />
            <Counter key={`${value}-${resetKey}`} value={value} />
            <Counter key={`${value}-${resetKey}`} value={value} />

            <Button onClick={handleReset}>Reset</Button>
        </div>
    )
}

const Counter = ({ value }) => {

    const [count, setCount] = useState(value);

    useEffect(() => {
        setCount((preVal) => value);
    }, [value]);

    const handleIncrease = () => {
        setCount((preVal) => preVal + 1);
    }

    const handleDecrease = () => {
        setCount((preVal) => preVal - 1);
    }

    return (
        <div>
            <Button onClick={handleIncrease}>Increase</Button>
            <Button onClick={handleDecrease}>Decrease</Button>
            <p>{count}</p>
            <p>{count}</p>
            <p>{count}</p>
            <p>{count}</p>
        </div>
    )

}
