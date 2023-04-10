// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
// function mul(/* ваш код */) {
//   // Ваш код
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0


function mul(...args) {
  const numbers = args.filter((value) => typeof value === 'number');
  console.log(numbers);
  if (!numbers.length) return 0;
  return numbers.reduce(
    (acc, curEl) => acc * curEl
  );
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));
