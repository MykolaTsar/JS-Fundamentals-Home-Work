// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
// upperCase('regexp'); 
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"

const upperCase = (string) => {
  let regExp = /^[A-Z]/;
  regExp.test(string) ? console.log('String\'s starts with uppercase character') : console.log('String\'s not starts with uppercase character');
}

upperCase('regexp');
upperCase('RegExp');