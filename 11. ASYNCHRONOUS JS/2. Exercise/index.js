// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise, робота якого завершується поверненням добутку елементів масиву, якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.

const calcArrProduct = (arr) => {
  return new Promise((resolve, reject) => {
    const checkArr = arr.every(el => typeof el === 'number')
    if (!checkArr) {
      reject('Error! Incorrect array!')
      return;
    }
    const result = arr.reduce((acc, el) => acc * el, 1)
    resolve(result);
  });
}


calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));