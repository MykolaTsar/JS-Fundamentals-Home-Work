/*
Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. Користувач вводить номер місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє. 
*/

const ticket = prompt('Entered number of Your ticket:', '');
// console.log(ticket);
// console.log(typeof ticket);
// const ticketNum = ticket;
// console.log(ticketNum);
// console.log(typeof ticketNum);

const coupeNumber = ticket / 9;
const enteredCoupeNumber = Math.ceil(coupeNumber);

/* if (ticketNum < 1 || ticketNum > 54 || isNaN(ticketNum)) {
    alert('Invalid tickets number!');
} else if (ticketNum % 6 === 1 || ticketNum % 6 === 3) {
    alert(`Your place is in coupe №${enteredCoupeNumber}, down-coupe.`);
} else if (ticketNum % 6 === 2 || ticketNum % 6 === 4) {
    alert(`Your place is in coupe №${enteredCoupeNumber}, up-coupe.`);
} else if (ticketNum % 6 === 5) {
    alert(`Your place is in coupe №${enteredCoupeNumber}, down-side.`);
} else if (ticketNum % 6 === 0) {
    alert(`Your place is in coupe №${enteredCoupeNumber}, up-side.`);
} */
let findPlace;

ticket <= 54 ? findPlace = (ticket % 6) : '';


switch (findPlace) {
  case 1:
    alert(`Your place in the coupe №${enteredCoupeNumber}, down-coupe`);
    break;
  case 3:
    alert(`Your place in the coupe №${enteredCoupeNumber}, down-coupe`);
    break;
  case 2:
    alert(`Your place in the coupe №${enteredCoupeNumber}, up-coupe`);
    break;
  case 4:
    alert(`Your place in the coupe №${enteredCoupeNumber}, up-coupe`);
    break;
  case 5:
    alert(`Your place in the coupe №${enteredCoupeNumber}, down-side`);
    break;
  case 0:
    alert(`Your place in the coupe №${enteredCoupeNumber}, up-side`);
    break;
  default:
    alert(`Invalid tickets number!`);
}
