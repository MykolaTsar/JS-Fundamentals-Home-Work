// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
const btn = document.querySelector('button')

const newElement1 = () => {
  const divEl = document.querySelector('div');
  const elem = document.createElement('p');
  const elemText = document.createTextNode('I was pressed!');
  elem.appendChild(elemText);
  divEl.appendChild(elem);
}

const newElement2 = () => {
  const divEl = document.querySelector('div');
  const elem = document.createElement('p');
  const elemText = document.createTextNode('Mouse on me!');
  elem.appendChild(elemText);
  divEl.appendChild(elem);
}

const newElement3 = () => {
  const divEl = document.querySelector('div');
  const elem = document.createElement('p');
  const elemText = document.createTextNode('Mouse is not on me!');
  elem.appendChild(elemText);
  divEl.appendChild(elem);
}

btn.addEventListener('click', newElement1);
btn.addEventListener('mouseover', newElement2);
btn.addEventListener('mouseout', newElement3);