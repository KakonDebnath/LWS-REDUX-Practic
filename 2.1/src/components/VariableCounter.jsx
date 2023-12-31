import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
import { decrement as dynamicDecrement, increment as dynamicIncrement } from "../redux/DynamicCounter/actions"


const VariableCounter = ({ count, increment, decrement }) => {

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


const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic
            ? state.dynamicCounter.value
            : state.counter.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic
            ? (value) => dispatch(dynamicIncrement(5))
            : () => dispatch(increment()),
        decrement: ownProps.dynamic
            ? (value) => dispatch(dynamicDecrement(2))
            : () => dispatch(decrement()),
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps)(VariableCounter);

export default connector;