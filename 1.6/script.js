// Select the dom element
const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

// action identifiers

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}


// initial State
const initialState = {
    value: 0,
};
// create a reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        }
    }
    else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        }
    } else {
        return state;
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
    store.dispatch(increment(5))
})
decrementBtn.addEventListener('click', () => {
    store.dispatch(decrement(2))
})

