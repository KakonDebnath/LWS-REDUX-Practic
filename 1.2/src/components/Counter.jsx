import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((preCount) => preCount + 1);
    }
    const decrement = () => {
        setCount((preCount) => preCount - 1);
    }
    return (
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold" id="counter">{count}</div>
            <div className="flex space-x-3">
                <button
                    onClick={increment}
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;