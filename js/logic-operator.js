"use strict";

/* Логические операторы */
// 5 сущностей которые всегда будут false: 0, пустая строка "", null, undefined, Nan.
// || - всегда возвращает первое положительное значение true. Eсли нет положительного значения, возвращает последнее ложное.
// Оператор && - всегда возвращает первое ложное значение false.
// Если нет ложного значение, возвращает последнее правдивое.
// Оператор не !
console.log(!0); // Первращает в логический тип данных.
// 0 - false, !0 - true.

const hamburger1 = true;
const fries1 = true;

if (hamburger1 && fries1) {
  // проверяется если гамбургер и фри соответствует значению = true, если да то - "Я сыт!"; Если нет - код ничего не выводит и идёт дальше, потому что не указано значение else.
  console.log("Я сыт!");
}

console.log(hamburger1 && fries1);
// console.log((hamburger && fries));  - оборачивается в скобки и проверяется если и то и то true, если да то - true;

// Если всё есть. И
const hamburger2 = 2;
const fries2 = 1;

if (hamburger2 === 3 && fries2 === 1) {
  console.log("Все сыты!");
} else {
  console.log("Мы уходим");
}

// Хоть что-то чтобы было. ИЛИ
// Оператор || - всегда возвращает первое положительное значение true
// Если нет положительного значения, возвращает последнее ложное.
const hamburger3 = 3;
const fries3 = 0;
const cola3 = 0;

if (hamburger3 || fries3 || cola3) {
  console.log("Все довольны!");
} else {
  console.log("Мы уходим");
}

let johnReport,
  alexReport,
  samReport,
  mariaRepost = "done";
console.log(johnReport || alexReport || samReport || mariaRepost);

// Оператор && - всегда возвращает первое ложное значение false.
// Если нет ложного значение, возвращает последнее правдивое.
console.log(1 && 0); // останавливается на false = 0.
console.log(1 && 5); // true и true, выводит последнее значение = 5.
console.log(null && 5); // останавливаетс на false = null.
console.log(0 && "строка"); // останавливается на false = 0.

// Смешанные значения.
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
// выполнится либо hamburger и cola или картошка и нагетсы.
if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log("Все довольны!");
} else {
  console.log("Мы уходим");
}

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));
// Выводится 2 потому что код доходит до элемента или || и выберает последнее положительное число.
