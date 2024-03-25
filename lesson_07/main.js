"use strict";

// let key = prompt("Enter key"); //favorite film

// let person = {
//   name: "Vasya",
//   age: 30,
//   "favorite film": "Avatar",
//   contacts: {
//     phone: 12345678,
//     email: "email@mail.com",
//   },
//   crimes: 0,
//   sayHi: function() {
//     console.log("Hello!");
//   }
// };

// console.log(person);
// console.log(person.name);
// // console.log('key', person[key]);
// person.sayHi();
// console.log(person.job);

// console.log(person["contacts"].phone);

// console.log(person.job.name);

// if("email" in person.contacts) {
//   console.log(person.contacts.email);
// }

// person.job && console.log(person.job.name);
// person.contacts && console.log(person.contacts.email);

// console.log(person["job"]?.name);
// person.sayHi?.();
// person.sayBuy?.();

// console.log(person.job);

// let newKey = prompt("Key");
// let newValue = prompt("Value");

// let person = {
//   name: "Vasya",
//   age: 30,
//   "favorite film": "Avatar",
//   contacts: {
//     phone: 12345678,
//     email: "email@mail.com",
//   },
//   "0return%": 123,
//   crimes: 0,
//   sayHi: function() {
//     console.log("Hello!");
//   }
// };

// person.car = "BMW";
// person["current country"] = "Ukraine";
// // person[newKey] = newValue;

// console.log('person:', person["0return%"]);

// let firstName = "Vasya";
// let lastName = "Pupkin";
// let department = "design";

// function getFullName() {
//   return this.firstName + " " + this.lastName;
// }
// // console.log(getFullName());

// let student = {
//   firstName: "James",
//   lastName: "Bond",
//   department,
// }

// let student2 = {
//   department,
//   "+90": "213",
//   "+0": "213",
//   lastName,
//   firstName,
//   23: "213",
// }

// student.getFullName = student2.getFullName;

// // console.log('student:', student);
// console.log('student 1:', student.getFullName());
// console.log('student 2:', student2.getFullName());
// console.log('student 2:', student2.contacts.getFullName());

// student2.firstName = 'Frederic';
// delete student2.department;

// console.log('student2:', student2)

// for(let key in student2) {
//   console.log(key)
//   // console.log(student2[key])
// }

// Arrays

// let array = ["Hello", "JavaScript", 123, null, false, {name: "Vasya"}];

// console.log('array:', array.length);
// console.log('array:', array[array.length - 1]);
// console.log('array:', array[2]);

// array[4] = "hi!"

// array[10] = 123;
// delete array[3];

// pop видаляє останній
// array.pop();

// // push додає останній
// array.push('Bye!', 'Bye!2')

// // видаляє перший елемент
// array.shift();

// // додає перщий елемент
// array.unshift("Python", "Python2");

// let multiArray = [
//   [1,2,3],
//   [4,5,6],
//   ["Hello", "Java", "Script"]
// ]

// multiArray[2][0] = 'Hi!';
// console.log('array:', multiArray);
// console.log('array:', multiArray[2].push('12313'));

// let array = ["Hello", "JavaScript", 123, null, false, {name: "Vasya"}];

// let message = array[0];
// let message2 = array[1];

// let [, message, , message2] = array;

// console.log('message:', message, message2);

// let person = {
//   name: "Vasya",
//   age: 30,
//   "favorite film": "Avatar",
//   contacts: {
//     phone: 12345678,
//     email: "email@mail.com",
//   },
//   crimes: 0,
//   sayHi: function() {
//     console.log("Hello!");
//   }
// };

// let personName = person.name;
// let crimes = person.crimes;

// let {name, crimes, contacts: {phone, email}} = person;

// let array = [personName, crimes, phone, currentEmail];

// console.log( name, crimes, phone, email);

// let x = 5;
// let y = 2;

// [y, x] = [x, y];

// console.log(y, x)

// let a = 2;
// let b = a;
// b = 3;

// let student1 = {
//   name: "Vasya",
// }

// let student2 = student1;
// console.log(a, b);
// console.log(student1, student2);

// student2.age = 30;
// delete student1.name;

// console.log(student1, student2);
