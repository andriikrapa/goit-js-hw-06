const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputLength = event.currentTarget.value.length;
    const dataLength = Number(this.dataset.length);
    
    this.classList.add('invalid');

    if (inputLength === dataLength) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    };
};