// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// //1.1, 3

// checkLogin('ee1*1ret3');
// false 
// 1, 1, 3

function checkLogin(str){
  const reqexLogin = /^[a-zA-z]{1}([a-zA-Z]|\d+(?:\.\d+)?){1,9}$/;
  const reqexNums = /\d*\.?\d+/g; 
  console.log(str.match(reqexNums));
  return reqexLogin.test(str);
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));