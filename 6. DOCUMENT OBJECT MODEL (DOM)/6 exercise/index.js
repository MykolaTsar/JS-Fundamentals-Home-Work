 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const color = document.querySelector('.colors');
const price = document.querySelector('#outprice');
const size = document.querySelector('.sizes');


color.addEventListener('click', (event) => changeColor(event));
size.addEventListener('click', (event) => changeSize(event));
color.addEventListener('click', () => changePrice());
size.addEventListener('click', () => changePrice());


function changeColor(event) {
  if (event.target.classList.contains('color')) {
    const activeColor = document.querySelector('.colors .active');
    activeColor.classList.remove('active');
    event.target.classList.add('active');
  }
}

function changeSize(event) {
  if (event.target.classList.contains('size')) {
    const activeSize = document.querySelector('.sizes .active');
    activeSize.classList.remove('active');
    event.target.classList.add('active');
  }
}

function changePrice() {
  const activeColor = document.querySelector('.colors .active');
  // console.log(activeColor);
  const activeSize = document.querySelector('.sizes .active');
  const newPriceColor = parseInt(activeColor.getAttribute('data-price'));
  // console.log(newPriceColor);
  const newPriceSize = Number(activeSize.getAttribute('data-price-s'));
  // console.log(newPriceSize);
  const totalPrice = newPriceColor + newPriceSize;
  price.innerText = totalPrice;
}