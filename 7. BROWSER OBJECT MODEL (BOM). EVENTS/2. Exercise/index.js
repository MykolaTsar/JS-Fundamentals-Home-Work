// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

const text = document.querySelector('#text');
const btn = document.querySelector('button');


const changeCSS = () => text.classList.toggle('newStyle');

btn.addEventListener('click', changeCSS);