
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const decrease = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

const increase = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", decrease);
incrementBtnEl.addEventListener("click", increase);