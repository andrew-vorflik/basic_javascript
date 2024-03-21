// "use strict";

// let user1 = {
//   firstName: "Vasya",
//   lastName: "Pupkin",
// };

// let user2 = {
//   firstName: "Mattew",
//   lastName: "McConahee",
// };

// function getFullName(context) {
//   return context.firstName + " " + context.lastName;
// }

// function greeting(context) {
//   return `Hello, ${getFullName(context)}`;
// }

// console.log(getFullName(user1));
// console.log(getFullName(user2));

// console.log(greeting(user1));
// console.log(greeting(user2));

// 1. Прив’язка за замовчуванням
// var firstName = "John";

// function func() {
//   console.log(this);
//   console.log(this.firstName);
// }

// console.log("func:", func());

// window.console.log(123);

// 2. Неявна прив’язка (owner object)

// let user1 = {
//   firstName: "Vasya",
//   lastName: "Pupkin",
// };

// function getFullName() {
//   console.log(this);
//   return this.firstName + " " + this.lastName;
// }

// function greeting(context) {
//   return `Hello, ${getFullName(context)}`;
// }

// user1.getFullName = getFullName;
// let user2 = {
//   firstName: "Mattew",
//   lastName: "McConahee",
//   getFullName,
// };

// console.log(user1.getFullName());
// console.log(user2.getFullName());

// 1 Копіюванні функції
// let getNameUser1 = user1.getFullName;

// console.log(getNameUser1());

// 2 функія як аргумент

// function showName(fn) {
//   fn();
// }

// console.log( showName(user2.getFullName) );

// 3. Явна прив'язка

// let user1 = {
//   firstName: "Vasya",
//   lastName: "Pupkin",
// };

// let user2 = {
//   firstName: "Mattew",
//   lastName: "McConahee",
// };

// // this - user1
// function getFullName() {
//   return this.firstName + " " + this.lastName;
// }

// // this = user1
// function greeting(message = "", param2, param3) {
//   return `Hello, ${message}  ${getFullName.call(this)}`;
// }

// console.log(getFullName.call(user1));
// console.log(getFullName.call(user2));

// console.log(greeting.call(user1, "dear", 123));
// console.log(greeting.apply(user2, ["our", 123]));

// let getFullNameOfUser1 = getFullName.bind(user2);
// let greetDearVasya = greeting.bind(user1, "dear");

// console.log(getFullNameOfUser1());
// console.log(greetDearVasya());

// function mul(num1, num2) {
//   // this
//   return num1 * this;
// }

// bind(context, arg1, arg2, arg3)

// let multipleBy2 = mul.bind(2);
// let multipleBy3 = mul.bind(this, 3);

// console.log("-----multipleBy2------");
// console.log("multipleBy2:", multipleBy2(2));
// console.log("multipleBy2:", multipleBy2(3));
// console.log("multipleBy2:", multipleBy2(4));
// console.log("multipleBy2:", multipleBy2(5));
// console.log("-----multipleBy3------");
// console.log("multipleBy3:", multipleBy3(2));
// console.log("multipleBy3:", multipleBy3(3));
// console.log("multipleBy3:", multipleBy3(4));
// console.log("multipleBy3:", multipleBy3(5));

// new
// function func() {
//   // this = {}
//   // return 123;
//   // return this;
// }

// let result1 = func();
// let result2 = new func();

// console.log("result 1:", result1);
// console.log("result 2:", result2);

// function User() {
//   // this = {}
//   let user1 = {
//     firstName: "Ivan",
//   };

//   user1.firstName = "John";
//   this.lastName = "Pedigrew";
//   console.log("user1:", user1);
//   // dvllskdmvlksdmvlk
//   // sdvkmskdmv
//   // sdvmlksdmv

//   // return this;
// }

// let person = new User();
// console.log("person:", person);

// 1
// function func() {
//   console.log(this);
// }

// func();

// // 2
// let actor = {
//   fullName: "Benedict Kemberbetch",
//   age: 45,
//   getName() {
//     console.log(this.fullName);
//   },
// };

// actor.getName();

// // 3
// function getAge() {
//   console.log(this.age);
// }

// getAge.call(actor);

// // 4

// function Actor(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let jonneDepp = new Actor("Jonnie Dep", 50);
// console.log("jonneDepp:", jonneDepp);

// function getStudentsGroup(studentName, index) {
//   console.log(`Студент групи ${this.course} ${index + 1} - ${studentName}`);
// }

// let group = {
//   course: "Basic JS",
//   students: ["Сергій", "Антон", "Дмитро", "Зеновія"],
//   getStudents() {
//     let that = this;

//     this.students.forEach(function (studentName, index) {
//       console.log(`Студент групи ${that.course} ${index + 1} - ${studentName}`);
//     });
//   },
// };

// group.getStudents();

// forEach(func) {
//   for (let index = 0; index < array.length; index++) {
//     func(arg1, arg2);
//   }
// }

// function getName(greet = "") {
//   console.log(`${greet} ${this.fullName}`);
// }

// function getAge(message = "") {
//   console.log(`${message} ${this.age}`);
// }

// let actor = {
//   fullName: "Benedict Kemberbetch",
//   age: 45,
// };

// function bind(fn, context, ...bindArgs) {
//   return function (...args) {
//     getName.apply(actor, [...bindArgs, ...args]);
//   };
// }

// let getActorName = bind(getName, actor);
// let greetActorByName = bind(getName, actor);
// let helloActorByName = bind(getName, actor, "Hello");

// getActorName();
// greetActorByName("Hi!");
// helloActorByName();

// let getActorAge = bind(getAge, actor);
// let getMessageActorAge = bind(getAge, actor, "WoW!");
// let getMessageActorAge2 = bind(getAge, actor);

// getActorAge();
// getMessageActorAge();
// getMessageActorAge2("Ого!");

// console.log(this);
