"use strict";

// Case 1

// const user1 = {
//   name: "John",
//   birthYear: 1990,
// };

// const user2 = {
//   name: "Mike",
//   birthYear: 2000,
// };

// function calculateAge() {
//   const currentYear = new Date().getFullYear();

//   return currentYear - this.birthYear;
// }

// console.log(calculateAge.call(user1));

// const user3 = {
//   name: "Mike",
//   birthYear: 2000,
//   calculateAge() {
//     const currentYear = new Date().getFullYear();

//     return currentYear - this.birthYear;
//   },
// };

// user3.calculateAge = calculateAge;

// // Case 2

// const admin = {
//   age: 35,
//   someValue: "qqqqqqq",
//   setToken(isUserAuthorized) {
//     return isUserAuthorized ? this.someValue : null;
//   },
// };

// console.log(admin.setToken(true));

// const user = {
//   firstName: "Jason",
//   lastName: "Statham",
//   // fullName:

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(newFullName) {
//     const newFullNameArray = newFullName.split(" ");
//     this.firstName = newFullNameArray[0];
//     this.lastName = newFullNameArray[1];

//     console.log("newFullNameArray:", newFullNameArray);
//   },
// };

// // console.log("user.firstName:", user.firstName);
// // console.log("user.lastName:", user.lastName);
// console.log("user.fullName:", user.fullName);
// user.fullName = "Peter Parker";
// console.log("user.fullName:", user.fullName);

// const user = {
//   fullName: "Bread Peat",
//   _phone: "+380631234567",

//   get phone() {
//     return this._phone;
//   },

//   set phone(newPhone) {
//     const isCorrectLength = newPhone.length === 13;
//     const isCorrectStart = newPhone.startsWith("+380");
//     const isNumbersOnly = !isNaN(+newPhone.slice(1));

//     if (isCorrectLength && isCorrectStart && isNumbersOnly) {
//       this._phone = newPhone;
//     } else {
//       console.log("Enter valid phone number");
//     }
//   },
// };

// // console.log("user.phone:", user.phone);
// user.phone = "+380931111111";
// console.log("user.phone:", user.phone);

// const animal = {
//   title: "animal",
//   sleep() {
//     console.log("Я сплю");
//   },
//   __proto__: {},
// };

// const cat = {
//   legCount: 4,
//   play() {
//     console.log("Я граю!");
//   },
//   __proto__: animal,
// };

// const donkey = {
//   say() {
//     console.log("Іа-Іа!");
//   },
//   __proto__: animal,
// };

// const shrekDonkey = {
//   say() {
//     console.log("Ми приїхали?");
//   },
//   __proto__: donkey,
// };

// shrekDonkey.say();
// shrekDonkey.sleep();

// for (let key in shrekDonkey) {
//   console.log(key, shrekDonkey.hasOwnProperty(key));
// }

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

// donkey.say();
// shrekDonkey.say();

// [[Prototype]]
// console.log("cat:", cat);

// console.log("cat.legCount:", cat.legCount);
// cat.play();
// cat.sleep();
// console.log("cat.title:", cat.title);
// // cat.eat();

// const user = {
//   firstName: "Leonardo",
//   lastName: "Dicaprio",
//   age: 49,
//   login() {
//     console.log("Hello! I'm logged in");
//   },
//   logout() {
//     console.log("Good bye! I'm logged out");
//   },
// };

// const admin = {
//   adminId: "12345",
//   addProduct() {
//     console.log("I have added new product");
//   },
//   __proto__: user,
// };

// const superAdmin = {
//   superAdminId: "@123",
//   createAdmin() {
//     console.log("I have created new admin");
//   },
//   __proto__: admin,
// };

// superAdmin.login();
// superAdmin.logout();
// console.log("superAdmin.firstName:", superAdmin.firstName);
// console.log("superAdmin.firstName:", superAdmin.adminId);
// console.log("superAdmin.firstName:", superAdmin.superAdminId);
// superAdmin.createAdmin();

// for (const key in superAdmin) {
//   console.log(key);
// }

// DRY
// Don`t
// Repeat
// Yourself

// const animal = {
//   title: "animal",
//   sleep() {
//     console.log("Я сплю");
//   },
// };

// function Cat(name, color) {
//   // this = {};

//   this.color = color;
//   this.name = name;

//   // return this;
// }

// const obj = {
//   legCount: 4,
//   play() {
//     console.log("Я граю!");
//   },
//   say() {
//     console.log("Мяу!");
//   },
//   __proto__: animal,
// };

// Cat.prototype = obj;

// Cat.prototype.__proto__ = animal;
// Cat.prototype.legCount = 4;
// Cat.prototype.play = function () {
//   console.log("Я граю!");
// };
// Cat.prototype.say = function () {
//   console.log("Мяу!");
// };

// console.log("Cat.prototype:", Cat.prototype);

// const tom = new Cat("Tom", "darkBlue");
// const garfield = new Cat("Garfield", "orange");

// console.log("garfield:", garfield);
// console.log("tom:", tom);

// tom.play();
// tom.say();
// tom.sleep();

// const barsik = new tom.constructor("Барсік", "gray");
// console.log("barsik:", barsik);

// const array2 = new Array();
// const array = [2, 4, 6];
// console.log("array:", array);

// array.forEach((item) => {
//   console.log(item);
// });

// console.log("Array.prototype:", Array.prototype);

// const array = [2, 4, 6];

// Array.prototype.ourMap = function (func) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i++) {
//     newArray[i] = func(this[i], i, this);
//   }

//   return newArray;
// };

// const newArray = array.ourMap((item) => {
//   return item * 2;
// });

// console.log("newArray:", newArray);

// console.log(Math);
