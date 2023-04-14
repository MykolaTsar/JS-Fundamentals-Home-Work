// Створіть наступний асинхронний ланцюжок promise:
new Promise(function (resolve, reject) {
   // Запитуємо у користувача number за допомогою prompt()
   // Якщо користувач ввів не число - викликаємо reject()
   // Якщо користувач ввів число- викликаємо resolve(number)
  let result = parseInt(prompt('Enter a number:'));
  if (isNaN(result)) {
    reject('Error! You entered not a number!');
  }
  resolve(result);
}).catch(function (error) {
  return new Promise(function (resolve, reject) {
      // Запитуємо у користувача number, до тих пір, поки він його не введе
      // Після вводу числа - викликаємо resolve(number)
      let result;
      do {
        result = parseInt(prompt('Enter a number:'));
      } while (isNaN(result)){
        return resolve(result);
      }
  });
}).then(function (result) {
   // Вивід number у консоль
  console.log(result);
});

