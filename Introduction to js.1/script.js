alert('Mykola');

/*
a) оголосіть дві змінні;
b) запишіть у змінні будь-які значення;
c) виведіть на екран значення змінних;
d) скопіюйте значення однієї змінної в іншу;
e) виведіть на екран значення змінних.
*/

let book;
let magazine;
book = "Adventures";
magazine = "Scientific";
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
  weight: null
};
console.log(typeof myObj.name);
console.log(typeof myObj.age);
console.log(typeof myObj.ukrainian);
console.log(typeof myObj.name);
console.log(typeof myObj.weight);

/* Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль. */


