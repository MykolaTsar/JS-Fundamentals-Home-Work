// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”


const correctStr = "Java Script";
const regEx = /(\w+) (\w+)/;
console.log(correctStr.replace(regEx, "$2, $1"));