// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
const cardVal = (cardNum) => {
  const val = /^\s*\d{4}(\s|-)\d{4}(\s|-)\d{4}(\s|-)\d{4}\s*$/;
  return val.test(cardNum);
}

console.log(cardVal('9999-9999-9999-9999'));