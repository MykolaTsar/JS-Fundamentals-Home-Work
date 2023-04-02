// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
const changeBackground = document.querySelector('div');
const clickBtn = document.querySelector('.click');
const doubleClickBtn = document.querySelector('.double-click');
const holdBtn = document.querySelector('.hold-click');
const hover = document.querySelector('a');

let originalColor = null;

// doubleClickBtn.addEventListener('dblclick', () => changeBackground.classList.toggle('pink'));
doubleClickBtn.addEventListener('dblclick', () => changeBackground.style.backgroundColor = 'pink');

// clickBtn.addEventListener('click', () => changeBackground.classList.toggle('blue'));
clickBtn.addEventListener('click', () =>
  changeBackground.style.backgroundColor = 'blue');

// holdBtn.addEventListener('mousedown', () => changeBackground.classList.add('brown'));
// holdBtn.addEventListener('mouseup', () => changeBackground.classList.remove('brown'));
holdBtn.addEventListener('mousedown', () => {
originalColor = changeBackground.style.backgroundColor;
changeBackground.style.backgroundColor ='brown';
});
holdBtn.addEventListener('mouseup', () => changeBackground.style.backgroundColor = originalColor);

hover.addEventListener('mouseover', () => {
  originalColor = changeBackground.style.backgroundColor;
  changeBackground.style.backgroundColor = 'yellow';
});
hover.addEventListener('mouseout', () => changeBackground.style.backgroundColor = originalColor);





