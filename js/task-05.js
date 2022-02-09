const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

function onInputChange(event) {
    event.currentTarget.value === ""
        ? nameOutputEl.textContent = 'Anonymous'
        : nameOutputEl.textContent = event.currentTarget.value;
};

nameInputEl.addEventListener("input", onInputChange);