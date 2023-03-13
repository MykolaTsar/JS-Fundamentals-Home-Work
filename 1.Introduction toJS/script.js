console.log('Mykola');

/*
a) оголосіть дві змінні;
b) запишіть у змінні будь-які значення;
c) виведіть на екран значення змінних;
d) скопіюйте значення однієї змінної в іншу;
e) виведіть на екран значення змінних.
*/

let book;
let magazine;
book = 'Adventures';
magazine = 'Scientific';
console.log(book);
console.log(magazine);
book = magazine;
console.log(book);
console.log(magazine);

/* Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних. */

let height;
let myObj = {
  name: 'Nikolas',
  age: 37,
  ukrainian: true,
  height,
  weight: null,
};
console.log(typeof myObj.name);
console.log(typeof myObj.age);
console.log(typeof myObj.ukrainian);
console.log(typeof myObj.name);
console.log(typeof myObj.weight);

/* Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль. */

const isAdult = confirm('Are U Adult?');
console.log(isAdult);

/* 
В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
- ваше ім’я
- ваше прізвище
- навчальна група
- ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. */

const myName = 'Nikolas';
const lastName = 'Tsar';
const group = 1;
const yearBirth = 2000;
const isMarried = true;
console.log(`${group} type of : ${typeof group}`);
console.log(`${yearBirth} type of : ${typeof yearBirth}`);
console.log(`${isMarried} type of : ${typeof isMarried}`);
console.log(`${myName} type of : ${typeof myName}`);
console.log(`${lastName} type of : ${typeof lastName}`);
let num;
console.log(`${num} type of : ${typeof num}`);
let trr = null;
console.log(`${trr} type of : ${typeof trr}`);

/* 
За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
*/

const login = prompt('Enter Your email or login:', '');
const password = prompt('Enter Password', '');

alert(`Dear User, your email is ${login}, your password is ${password}`);

/* 
Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
*/

const secondsPerHour = 60 * 60;
const secondsPerDay = 24 * secondsPerHour;
const secondsPerMonth = 30 * secondsPerDay;

console.log(`Кількість секунд в годині: ${secondsPerHour}`);
console.log(`Кількість секунд в добі: ${secondsPerDay}`);
console.log(`Кількість секунд в місяці: ${secondsPerMonth}`);
