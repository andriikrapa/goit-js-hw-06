
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtnClick = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

const onIncrementBtnClick = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", onDecrementBtnClick);
incrementBtnEl.addEventListener("click", onIncrementBtnClick);