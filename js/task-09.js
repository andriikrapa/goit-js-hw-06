/*
1. Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
при клике на button.change-color и выводит значение цвета в span.color.
2. Для генерации случайного цвета используй функцию getRandomHexColor.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
*/
const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('button.change-color');
const spanRef = document.querySelector('span.color');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const bgrColor = getRandomHexColor();

  bodyRef.style.backgroundColor = bgrColor;

  spanRef.textContent = bgrColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};