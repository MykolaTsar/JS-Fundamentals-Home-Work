/*
1.Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
a < b < c
*/

let A;
let B;
let C;
if (A < B && B < C) {
    console.log("A < B < C is true");
} else {
    console.log("A < B < C is false");
}
A = 2;
B = 4;
C = 10;
if (A < B && B < C) {
    console.log("A < B < C is true");
} else {
    console.log("A < B < C is false");
}

/*
2.Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у. 
*/

let x = 1;
let y = 2;

let res1 = `${x}${y}`; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = `${!!x}${y}`;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = !!(x + y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = parseFloat(`x + y`); // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

/*
3.Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”,  
*/

const isAdult = prompt('Are U adult? Put here your age', '');
const age = +isAdult;

if (age < 1 || isNaN(isAdult)) {
  alert('Invalid Input');
} else if (age < 18) {
    alert("U are so young yet!");
} else {
    alert('U are adult!');
}

/*
4.Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву. 
*/

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = {};

//рахуємо кількість входжень в обєкт
for (let number of arr) {
    data[number] = data[number] ? data[number] + 1 : 1;
}
console.log(data);

// Знаходимо ключ з найбільшим значенням (кількістю входжень)
let maxCount = 0;
let count;
for (let num in data) {
  if (data[num] > maxCount) {
    maxCount = data[num];
    count = num;
  }
}

// Створюємо новий масив з шуканим числом
let newArr = [count];

// Видаляємо всі входження цього числа із поточного масиву
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == count) {
      arr.splice(i, 1);
    }
  }

console.log(arr) // [4, 2, 1, 6, 3, 2]

/*
5. 
Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
    a) визначити і вивести в консоль площу трикутника 
    b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424). 
*/
const a = prompt('Enter the length of the 1st side of the triangle', '');
const b = prompt('Enter the length of the 2nd side of the triangle', '');
const c = prompt('Enter the length of the 3rd side of the triangle', '');


const aa = +a;
const bb = +b;
const cc = +c;
if (aa <= 0 || isNaN(aa) || bb <= 0 || isNaN(bb) || cc <= 0 || isNaN(cc)) {
  alert(`incorect input!`);
} else {
const s = (aa + bb + cc) / 2;
// console.log(s);
const area = Math.sqrt(s * (s - aa) * (s - bb) * (s - cc));
// console.log(area);
const roundArea = area.toFixed(3);
console.log(roundArea);

const rightTriangle = Math.pow(cc, 2) === Math.pow(aa, 2) + Math.pow(bb, 2);
console.log(`Our triangle is right triangle: ${rightTriangle}`);
}

/*
6. 
Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”. 
*/

const now = new Date();
const hours = now.getHours();

console.log(hours);

if (hours >= 5 && hours < 11) {
  alert(`Доброго ранку`);
} else if (hours >= 11 && hours < 17) {
  alert(`Доброго дня`);
} else if (hours >= 17 && hours < 23) {
  alert(`Доброго вечора`);
} else {
  alert(`Доброї ночі`);
}
