/*
1. Обработка отправки формы form.login-form должна быть по событию submit.
2. При отправке формы страница не должна перезагружаться.
3. Если в форме есть незаполненные поля, выводи alert с предупреждением
    о том, что все поля должны быть заполнены.
4.Если пользователь заполнил все поля и отправил форму,
    собери значения полей в обьект, где имя поля будет именем свойства, а значение поля -
    значением свойства.Для доступа к элементам формы используй свойство elements.
5. Выведи обьект с введенными данными в консоль и очисти значения полей формы 
    методом reset.
*/

const inputRef = document.querySelector('form.login-form');

inputRef.addEventListener('submit', onInputSubmit);

function onInputSubmit(event) {
    event.preventDefault();

    const inputValues = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    };

    inputValues.email === "" || inputValues.password === ""
        ? alert("Все поля должны быть заполнены!")
        : console.log(inputValues);

    event.currentTarget.reset();
};