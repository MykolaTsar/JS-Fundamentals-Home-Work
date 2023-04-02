// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
const select = document.querySelector('#mySelect');
const btn = document.querySelector('button');

const removeIt = () => {
  const selectOption = select.options[select.selectedIndex];
  select.removeChild(selectOption);
};

btn.addEventListener('click', removeIt);
