// ДЛЯ ЗРУЧНОСТІ ПЕРЕВІРКИ, РОЗКОМЕНТОВУВАТИ ТІЛЬКИ БЛОЧНІ КОМЕНТАРІ!/*  */
// 1.Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

const sumSliceArray = (arr, first, second) => {
  try {
    first = parseInt(first);
    second = parseInt(second);
    if (isNaN(first) || isNaN(second)) {
      throw "Ви ввели не числа";
    }
    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
      throw "Ви ввели невірний індекс";
    }
    return arr[first] + arr[second];
  } catch (error) {
    console.log("Сталася помилка:", error);
  }
}

const myArr = [1, 3, 5, 7, 8, 9];
console.log(sumSliceArray(myArr, 2, 'f'));

// 2.Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.

/* const chechAge = () => {
  try {
    const name = prompt('Enter Your name: ', '');
    if (!name) {
      throw Error('The field is empty! Please enter your name!');
    }
    const age = prompt('Enter Your age: ', '');
    if (age < 18 || age > 70) {
      throw RangeError('Your age is not suitable');
    }
    if (!age) {
      throw Error('The field is empty! Please enter your age!');
    }
    const status = prompt('Enter Your status(admin, moderator, user): ', '');
    if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
      throw EvalError('Not correct status!');
    }
    if (!status) {
      throw Error('The field is empty! Please enter your status!');
    }
    alert('You can watch film!')
  } catch(error) {
    alert(`${error.name}: ${error.message}`);
  }
}

chechAge(); */

// 3.Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри. Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

/* const calcRectangleArea = (width, height) => {
  try {
    const square = width * height;
    if (typeof width !== 'number' || typeof height !== 'number') {
    throw Error('Invalid enter!');
    }
    return square;
  } catch(error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

console.log(calcRectangleArea(2, 'a')); */

// 4.Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

/* class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

const showMonthName = (month) => {
  try {
    const monthName = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    if (month < 1 || month > 12) {
      throw new MonthException('Невірне число місяця.')
    }
    if (typeof month !== 'number') {
      throw new MonthException('Некоректний ввід');
    }
    return monthName[month - 1];
  } catch(error) {
    console.log(error.message);
  }
}

console.log(showMonthName('d')); */

// 5.Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

/* const showUser = (id) => {
  if (id < 0) {
    throw Error('Число має бути більшим за нуль.')
  }
  return {id: id};
}

const showUsers = (ids) => {
  const elements = [];
  for (let i = 0; i  < ids.length; i++) {
    try {
      elements.push(showUser(ids[i]));
    } catch(error) {
      console.log(`${error.name}: ${error.message}`);
    }
  }
  return elements;
}

console.log(showUsers([2, 4, -5])); */