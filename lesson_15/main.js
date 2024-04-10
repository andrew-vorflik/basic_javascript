"use strict";
// Синхронна
// Блокуюча
// Однопоточна

// console.log("start");

// for (let i = 0; i < 10000000000; i++) {
//   i++;
// }

// console.log("end");

// document.querySelector("button").addEventListener("click", () => {
//   console.log("Click");
// });

// function hardCalculation(cb) {
//   for (let i = 0; i < 10000000000; i++) {
//     i++;
//   }
//   cb?.();
// }

// hardCalculation();

// setTimeout(cb, ms, ...args)

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// function sayHi(name) {
//   console.log(`Hi ${name}`);
// }

// let timeoutId = setTimeout(() => {
//   sayHi("John");
// }, 1000);

// setTimeout(() => {
//   clearTimeout(timeoutId);
// }, 500);

// console.log(timeoutId);

// console.log("start");

// let id = setTimeout(() => {
//   console.log("timeout");
// }, 0);

// console.log("id:", id);

// console.log("end");

// function rideTaxi(cb) {
//   console.log("Дівчина сіла в таксі");

//   setTimeout(() => {
//     console.log("Дівчина Приїхала додому");
//     cb();
//   }, 3000);
// }

// rideTaxi(() => console.log("Я вже вдома"));

// function getWether(cb) {
//   let wether = "Сонячно, +20";
//   console.log("Запит на сервер");

//   for (let i = 0; i < 10000000000; i++) {
//     i++;
//   }
//   console.log("Запит Завершено");

//   cb(wether);
// }

// getWether(console.log);

// setInterval(cb, ms, ...arg)

// let id1 = setInterval(() => {
//   console.log("Hello");
// }, 1000);

// setTimeout(() => {
//   clearInterval(id1);
// }, 5000);

// let count = 0;

// let id = setInterval(() => {
//   console.log(++count);

//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

// let count = 0;

// let id = setTimeout(function counter() {
//   console.log(++count);

//   if (count === 5) {
//     clearTimeout(id);
//     return;
//   }

//   id = setTimeout(counter, 1000);
// }, 1000);

// console.log("Start");

// setTimeout(() => {
//   console.log("timeout");
// }, 3000);

// for (let i = 0; i < 10000000000; i++) {
//   i++;
// }

// console.log("End");

// function make1Dish(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова!`);
//     cb?.();
//   }, time);
// }

// function make2Dish(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова!`);
//     cb?.();
//   }, time);
// }

// function make3Dish(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова!`);
//     cb?.();
//   }, time);
// }

// function make4Dish(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова!`);
//     cb?.();
//   }, time);
// }

// make1Dish("Борщ", 2000, () => {
//   make2Dish("Паста", 30000, () => {
//     make2Dish("Кава", 2500, () => {
//       make2Dish("Морозиво", 100);
//     });
//   });
// });
// make1Dish()
// make2Dish()
// make3Dish()
// make4Dish()

// Aplication Public interface
// Math.

// setTimeout setInterval

// function for, while,

// console.log(100);
// // console.log(console);

// function foo() {
//   console.warn(100);
// }
// console.error(100);

// foo();

// console.log("%c100", "BACKGROUND-COLOR: #CCC; color: red;");

// console.table([100, 200, 300]);

// console.group("group");
// console.log(10);
// console.log(20);
// console.log(30);
// console.groupEnd("group");

// console.time("for");
// for (let i = 0; i < 1000000000; i++) {
//   Math.sqrt(i);
// }
// console.timeEnd("for");

// console.time("while");
// let i = 0;
// while (i < 1000000000) {
//   Math.sqrt(i);
//   i++;
// }
// console.timeEnd("while");
