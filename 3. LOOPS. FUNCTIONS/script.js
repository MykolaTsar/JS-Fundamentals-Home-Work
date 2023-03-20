// ДЛЯ ЗРУЧНОСТІ ПЕРЕВІРКИ РОЗКОМЕНТОВУВАТИ ПОТРІБНО ЛИШЕ БЛОЧНІ КОМЕНТАРІ/*  */
// 1.Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.

const arr = [2, 3, 4, 5, 6, 7, 3];

const compact = (arr) => {
  const value = [];
  arr.map(element => {
  if(value.indexOf(element) === -1) {
    value.push(element);
    }
  });
  return value;
}
console.log(compact([2, 3, 4, 5, 6, 7, 3]))
// 2.Написати функцію createArray(start, end), яка приймає на вхід 2 параметри: початкове значення, кінцеве значення, а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)

// розв'язок за допомогою циклу
/* const createArray = (a, b) => {
  let myArr = [];
  for (let i = a; i <= b; i++) {
    myArr.push(i);
  }
  return myArr;
} */

//розв'язок за допомогою методів
/* const createArray1 = (a, b) => Array.from(Array(b - a + 1).keys(), i => a + i);

let arr = createArray(2, 9);
let arr1 = createArray1(5, 9);
console.log(arr); 
console.log(arr1); */

// 3.Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.

/* const myFunc = (a, b) => {
  const numbers = [];
  for (let i = a; i <= b; i++) {
    let stepItteration = i - a + 1;
    for (let j = 1 ; j <= stepItteration; j++) {
      numbers.push(i);
    }
  }
  return numbers;
}  
console.log(myFunc(2, 5)); */

// 4.Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

/* const randArray = k => {
  let arrK = [];
  for (let i = 1; i <= k; i++) {
    let randNum = Math.ceil(Math.random() * 500);
    arrK.push(randNum);
  }
  return arrK;
}

console.log(randArray(5)); */

// 5.Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”] Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)

/* let  arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

const funcName = (a) => {
  const numArr = [];
  const stringArr = []
  for (let i of a.flat()) {
    if (typeof i === 'number') {
      numArr.push(i);
    } else {
      stringArr.push(i);
    }
  }
  const newArr = [numArr, stringArr];
  return newArr;
}

let arrNew = funcName(arr);

console.log(arrNew); */

// 6.Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

/* const calc = (a, b, op) => {
  let result;
  if (op === 1) {
    result = a - b;
  } else if (op === 2) {
    result = a * b;
  } else if (op === 3) {
    result = a / b;
  } else {
    result = a + b;
  }
  return result;
};

console.log(calc(6, 2, 1)); */

// 7.Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

/* const findUnique = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(findUnique([1, 2, 3, 5, 33]));  
console.log(findUnique([1, 2, 3, 5, 11, 1]));  */
