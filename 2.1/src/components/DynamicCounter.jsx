import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/DynamicCounter/actions";




const DynamicCounter = () => {
    const count = useSelector((state)=>state.dynamicCounter.value)
    const dispatch = useDispatch();


    const handleIncrement = (value) => {
        dispatch(increment(value))
    }
    const handleDecrement = (value) => {
        dispatch(decrement(value))
    }

    return (
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold text-center">
                <h1>Dynamic Counter</h1>
                <h2>{count && count || 0}</h2>
            </div>
            <div className="flex space-x-3">
                <button
                    onClick={()=>handleIncrement(5)}
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                >
                    Increment
                </button>
                <button
                    onClick={()=>handleDecrement(2)}
                    className="bg-red-400 text-white px-3 py-2 rounded shadow" 
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default DynamicCounter;