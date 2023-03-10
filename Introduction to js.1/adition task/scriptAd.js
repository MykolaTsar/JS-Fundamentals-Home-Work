/*
Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. Користувач вводить номер місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє. 
*/

const ticket = prompt('Entered number of Your ticket:', '');
// console.log(ticket);
// console.log(typeof ticket);
const ticketNum = parseInt(ticket);
// console.log(ticketNum);
// console.log(typeof ticketNum);

const coupeNumber = ticketNum / 9;
const enteredCoupeNumber = Math.ceil(coupeNumber);


if (ticketNum < 1 || ticketNum > 54 || isNaN(ticketNum)) {
    alert('Invalid tickets number!');
} else if (ticketNum % 6 === 1 || ticketNum % 6 === 3) {
    alert(`Your place is in coupe №${enteredCoupeNumber}, down-coupe.`);
} else if (ticketNum % 6 === 2 || ticketNum % 6 === 4) {
    alert(`Your place is in coupe №${enteredCoupeNumber}, up-coupe.`);
} else if (ticketNum % 6 === 5) {
    alert(`Your place is in coupe №${enteredCoupeNumber}, down-side.`);
} else if (ticketNum % 6 === 0) {
    alert(`Your place is in coupe №${enteredCoupeNumber}, up-side.`);
}