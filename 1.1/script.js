const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

// initial state
let count = 0;

incrementBtn.addEventListener('click', () => {
    // counter = counter + 1;
    count++;
    counterEl.innerText = count;
})
decrementBtn.addEventListener('click', () => {
    count--;
    counterEl.innerText = count;
})
// counterEl.innerText = counter;