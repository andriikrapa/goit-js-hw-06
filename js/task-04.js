
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const decrementBtnClickHandler = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

const incrementBtnClickHandler = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", decrementBtnClickHandler);
incrementBtnEl.addEventListener("click", incrementBtnClickHandler);