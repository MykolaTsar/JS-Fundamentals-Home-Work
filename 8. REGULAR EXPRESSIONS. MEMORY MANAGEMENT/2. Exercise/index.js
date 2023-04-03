// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

const checkEmail = (email) => {
  let reExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reExp.test(email);
}

console.log(checkEmail("Qmail2@gmail.com"));