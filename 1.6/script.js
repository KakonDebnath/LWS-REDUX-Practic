// Select the dom element
const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');



// initial State
const initialState = {
    value: 0,
};
// create a reducer function
function counterReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + action.payload,
        }
    }
    else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.payload,
        }
    } else {
        return state ;
    }
};

// create redux store
const store = Redux.createStore(counterReducer);
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}

store.subscribe(render);
// create btn

incrementBtn.addEventListener('click', () => {
    store.dispatch({
        type: "increment",
        payload: 5,
    })
})
decrementBtn.addEventListener('click', () => {
    store.dispatch({
        type: "decrement",
        payload: 2,
    })
})

