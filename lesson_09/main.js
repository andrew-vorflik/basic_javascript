// let map = new Map();
// let map2 = new Map();
// let obj = {};

// let user = {
//   age: 30,
// };

// let user2 = {
//   name: "Vasya",
// };

// obj.name = "John";
// map.set("name", "John");

// obj[123] = true;
// map.set(123, true);
// map.set(123, false);

// map.set(user, "user");
// obj[user] = "user";

// map.set(user2, "user2");
// map.set(user2, "user3");
// obj[user2] = "user2";

// map.set(NaN, [1, 2, 3]); // === NaN === NaN

// console.log("obj:", obj);
// console.log("map:", map);

// map.set(map2, "MAP");

// console.log(map.set());

// console.log(map.get(NaN));

// if (map.has(NaN)) {
//   console.log("Є");
// }

// map.delete(NaN);
// map.clear();

// map.set([1, 2, 3], "Array");

// map.forEach((value, key, map) => {
//   console.log(value, key);
// });

// console.log("map:", map.get(NaN));

// console.log("map:", map);
// let mapKeys = map.keys();
// let mapValues = map.values();
// let mapEntries = map.entries();
// console.log("mapKeys:", Array.from(mapEntries));

// [
//   [key, value],
//   [key, value],
//   [key, value],
//   [key, value],
//   [key, value],
// ]

// console.log("mapKeys:", mapKeys);
// let array = [1, 3, 5, 7, 9];
// let string = "Hello!";

// let obj2 = {
//   name: "Vasya",
//   age: 30,
// };

// for (const value of obj2) {
//   console.log(value);
// }

// user.age = 30;
// user.name = "";

// [["name", "Vasya"][("age", 30)]];

// let newMap = new Map([
//   ["name", "Vasya"],
//   ["age", 30],
// ]);

// let entriesNewMap = newMap.entries();

// console.log("obj:", Object.fromEntries(entriesNewMap));

// let newUser = {
//   nick: "agent007",
//   role: "admin",
// };

// let entriesObj = Object.entries(newUser);
// console.log("entriesObj:", entriesObj);

// let map3 = new Map(entriesObj);
// console.log("map3:", map3);
// let array = [1, 2, 3, 4, 5, 3, 4, 5];

// let message = "JavaScript";

// // console.log('message.split(""):', message.split(""));
// let set = new Set([1, 2, 3, 4, 5, 3, 4, 5]);

// set.add("Hello").add("world");

// // console.log('set.has("Hello"):', set.has("Hello1"));

// set.delete(5);
// // set.clear();

// set.forEach((value) => {
//   // console.log("value, valueAgain,:", value, valueAgain);
// });

// let keys = set.keys();
// let value = set.values();
// let entries = set.entries();

// console.log("set:", entries);

// let map = new Map();

// map
//   .set("name", "Vasya")
//   .set("age", 30)
//   .set("role", "admin");

// console.log("set:", set);

// weakMap weakSet
// let weakMap = new WeakMap();
// let map = new Map();

// let user = {
//   name: "Robert",
//   age: 30,
// };
// let user2 = {
//   name: "Robert",
//   age: 30,
// };

// weakMap.set(user, "qwerty");
// map.set(user2, "qwerty");

// user = null;
// user2 = null;

// console.log("weakMap:", weakMap);
// console.log("Map:", map);

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 === id2);

// let userLocation = Symbol();
// // let userLocation = Symbol();

// let user2 = {
//   name: "Robert",
//   age: 30,
//   [userLocation]: "Lviv",
// };

// for (const key in user2) {
//   console.log("object[key]:", user2[key]);
// }

// let user = {
//   name: "Robert",
//   age: 30,
//   role: "admin",
//   email: "email@mail.com",
//   country: "Ukraine",
// };

// {value: any, done: boolean}

// user[Symbol.iterator] = function () {
//   let i = false;

//   return {
//     next() {
//       if (!i) {
//         i = true;
//         return { value: 1, done: false };
//       }

//       return { done: true };
//     },
//   };
// };

// let ip = 2218093899;

// let user = {
//   name: "Robert",
//   age: 30,
//   role: "admin",
//   email: "email@mail.com",
//   country: "Ukraine",
//   [ip]: ip,
//   [Symbol.iterator]() {
//     let values = [];
//     let i = 0;

//     for (const key in this) {
//       values.push(this[key]);
//     }

//     return {
//       next() {
//         if (i < values.length) {
//           return { value: values[i++], done: false };
//         }

//         return { done: true };
//       },
//     };
//   },
// };

// {value: any, done: boolean}
// user[Symbol.iterator] = function () {
//   let values = [];
//   let i = 0;

//   for (const key in this) {
//     values.push(this[key]);
//   }

//   return {
//     next() {
//       if (i < values.length) {
//         return { value: values[i++], done: false };
//       }

//       return { done: true };
//     },
//   };
// };

// let array = [2, 4, 6, 8];
// console.log("array:", array);

// for (const iterator of array) {
//   console.log(iterator);
// }

// let films = {
//   action: [
//     {
//       name: "Terminator 2",
//       year: 1991,
//     },
//     {
//       name: "Avatar",
//       year: 2010,
//     },
//     {
//       name: "Duna 2",
//       year: 2024,
//     },
//   ],
//   drama: [
//     {
//       name: "Titanic",
//       year: 1990,
//     },
//     {
//       name: "Forest Gamp",
//       year: 1994,
//     },
//   ],
//   documentary: [
//     {
//       name: "Planet Earth",
//       year: 2010,
//     },
//     {
//       name: "Mariupol",
//       year: 2023,
//     },
//   ],
// };

// films[Symbol.iterator] = function () {
//   let filmNames = [];
//   let i = 0;

//   for (const key in this) {
//     this[key].forEach((item) => {
//       filmNames.push(item.year);
//     });
//   }

//   return {
//     next() {
//       if (i < filmNames.length) {
//         return { value: filmNames[i++], done: false };
//       }

//       return { done: true };
//     },
//   };
// };

// for (const iterator of films) {
//   console.log(iterator);
// }

// let message = "Hello JavaScript!";

// let iterator = message[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();

//   if (result.done) {
//     break;
//   }

//   console.log(result.value);
// }
