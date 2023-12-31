import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";


const HooksCounter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold text-center">
                <h1>Simple Counter</h1>
                <h2>{count}</h2>
            </div>
            <div className="flex space-x-3">
                <button
                    onClick={handleIncrement}
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                >
                    Increment
                </button>
                <button
                    onClick={handleDecrement}
                    className="bg-red-400 text-white px-3 py-2 rounded shadow" 
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default HooksCounter;