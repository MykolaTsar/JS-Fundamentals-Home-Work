//1.Напишіть клас Круг та реалізуйте функціонал:
//- Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
//- Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
//- Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
//- Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
//- Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
//- Визначте метод перевірки попадання крапки до кола;
//- Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).
/* class Circle {
  constructor(centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
  }

  getCircleLength() {
    return 2 * Math.PI * this.radius;
  }
  
  static getCircleLenghtByRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCircleObjCopy() {
    return new Circle(this.centerX, this.centerY, this.radius);
  }

  static getCircleStaticReturnCopy(centerX, centerY, radius) {
    return new Circle(centerX, centerY, radius);
  }

  checkEnteringPointToCircle (x, y) {
    const distance = Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2);
    return distance <= this.radius;
  }

getCircleObjToString () {
  return `Центр кола: (x = ${this.centerX}, y = ${this.centerY}), радіус: ${this.radius}.`
}

}

const circle = new Circle(1, 1, 5);
console.log(circle.getCircleLength());
console.log(Circle.getCircleLenghtByRadius(4));
console.log(circle.getCircleObjCopy());
console.log(Circle.getCircleStaticReturnCopy(1, 1, 5));
console.log(circle.checkEnteringPointToCircle(2, 3));
console.log(circle.checkEnteringPointToCircle(5, 10));
console.log(circle.getCircleObjToString ()); */

//2.Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
/* let mentor = { 
  course: "JS fundamental", 
  duration: 3,
  direction: "web-development" 
};

const countObjProp = () => {
  const propNum = Object.keys(mentor).length;
  return propNum;
}

const ans = countObjProp();

console.log(ans); */

//3.-  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
//- Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
//- В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
//- Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
//Приклад результату:
//const stud1 = new Student("Petro", "Petrenko", 2019);
//console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
//console.log("Current course: " + stud1.showCourse()); //Current course: 4

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    // return console.log(`${this.name} ${this.surname}`);
    return console.log(this.name, this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname)
    this.year = year;
  }

  showFullName(midleName) {
    return console.log(this.name, this.surname, midleName);
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year + 1;
    return console.log(Math.max(Math.min(course, 6), 1));
  }
}

const answ = new Student("Petro", "Petrenko", 2023);
answ.showFullName("Petrovych");
"Current course: " + answ.showCourse();

//4.А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
//- поле, яке зберігає колір маркера;
//- поле, яке зберігає кількість чорнила в маркері (у відсотках);
//- метод друку (метод приймає рядок і виводить текст відповідним кольором;
//текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
//В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів

/* class Marker {
  constructor(color, percentAmount) {
    this.color = color;
    this.percentAmount = percentAmount;
  }

  print(line) {
    let printedText = '';
    for (let i = 0; i < line.length; i++)
    if (this.percentAmount >= 0.5) {
      printedText += line[i];
      if (line[i] !== '') {
        this.percentAmount -= 0.5;
      }
    } else {
      console.log('Marker is empty!');
      break;
    }
    console.log(`${printedText}, color: ${this.color}, marker filled: ${this.percentAmount}%`);
  }
}

class FillMarker extends Marker {
  fill() {
    this.percentAmount = 100;
    console.log('You filled this marker!');
  }
}

const marker = new Marker('purple', 20);
marker.print('Very interesting interesting sddssdstory!');
const nextMarker = new FillMarker('green', 15);
nextMarker.print('Very interesting story!nbbnnb');
nextMarker.fill();
nextMarker.print('hello'); */

//5.Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
//1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
//2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
//4) Вивести значення зарплати з новим experience.
//5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
//6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
//Example usage:
//let worker1 = new Worker("John Johnson", 20, 23);
//console.log(worker1.fullName);                 
//worker1.showSalary();
//console.log("New experience: " + worker1.showExp);
//worker1.showSalaryWithExperience();
//worker1.setExp = 1.5;
//console.log("New experience: " + worker1.showExp);
//worker1.showSalaryWithExperience();

//let worker2 = new Worker("Tom Tomson", 48, 22);
//. . . . . .

//let worker3 = new Worker("Andy Ander", 29, 23);
//. . . . . .

/* class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this._experience;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  get showExp() {
    return this._experience;
  }

  set setExp(value) {
    this._experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.showSalary();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.showSalary();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];
workers.sort((a, b) => a.showExp - b.showExp);
console.log("Sorted salary:");
for (let i = 0; i < workers.length; i++) {
  workers[i].showSalaryWithExperience();
} */

