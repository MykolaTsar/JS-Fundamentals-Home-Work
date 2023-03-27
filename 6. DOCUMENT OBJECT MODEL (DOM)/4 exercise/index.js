// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const button = document.querySelector('.btn');
const output = document.querySelector('.out');

button.addEventListener('click', () => {
  const name = document.querySelector('.text-data').value;
  const phone = document.querySelector('.phone-data').value;
  const birthday = document.querySelector('.date-data').value;
  const email = document.querySelector('.email-data').value;

  output.innerHTML = `ПІБ: ${name},<br>Номер телефону: ${phone},<br>Дата народження: ${birthday},<br>Електронна пошта: ${email}.`;
});
