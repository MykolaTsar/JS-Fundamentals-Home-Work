// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.

const elemDiv = document.querySelector('div');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
elemDiv.innerHTML = `<p>Width:${windowWidth}, Height:${windowHeight}</p>`

window.addEventListener('resize', () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  elemDiv.innerHTML = `<p>Width:${windowWidth}, Height:${windowHeight}</p>`;
});