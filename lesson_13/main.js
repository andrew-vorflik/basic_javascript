// "use strict";
// const person = {
//   firstName: "Leo",
//   lastName: "Dicaprio",
// };

// const actor = {
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   play() {
//     console.log("I love you, Roza!");
//   },
//   __proto__: person,
// };

// for (const key in actor) {
//   if (Object.hasOwnProperty.call(actor, key)) {
//     console.log("key:", key);
//   }
// }

// console.log(Object.keys(actor));
// console.log(Object.values(actor));
// console.log(Object.entries(actor));

// const actorEntries = Object.entries(actor);
// const mapActor = new Map(actorEntries);
// const objectActor = Object.fromEntries(actorEntries);

// console.log("objectActor:", objectActor);
// console.log("mapActor:", mapActor);

// mapActor.get("play")();

// preventExtensions
// const actor = {
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   play() {
//     console.log("I love you, Roza!");
//   },
// };

// Object.preventExtensions(actor);

// if (Object.isExtensible(actor)) {
//   actor.firstName = "Leo";
// }

// console.log("actor:", actor);

// seal
// const actor = {
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   play() {
//     console.log("I love you, Roza!");
//   },
// };

// Object.seal(actor);

// actor.email = "leo123@mail.com";

// if (!Object.isSealed(actor)) {
//   actor.firstName = "Leo";
//   delete actor.phone;
// }
// delete actor.email;

// console.log("actor:", actor);

// Object.freeze
// const actor = {
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   play() {
//     console.log("I love you, Roza!");
//   },
// };

// Object.freeze(actor);

// if (!Object.isFrozen(actor)) {
//   actor.firstName = "Leo";
//   delete actor.email;
//   actor.phone = "213123";
// }

// console.log("actor:", actor);

// preventExtensions - додавати
// seal - додавати видаляти
// freeze додавати видаляти змінювати

// const actor = {
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   play() {
//     console.log("I love you, Roza!");
//   },
// };

// Object.seal(actor);

// if (!Object.isFrozen(actor)) {
//   actor.firstName = "Leo";
//   delete actor.phone;
// }

// console.log("actor:", actor);

// const actor = {
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   play() {
//     console.log("I love you, Roza!");
//   },
// };

// console.log(Object.getOwnPropertyDescriptor(actor, "email"));

// // writable - перезапис
// // enumerable - присутність for in Object.keys()
// // configurable - видалення конфігурація

// Object.defineProperty(actor, "email", {
//   writable: false,
// });

// // actor.email = "leo123@mail.com";
// console.log("actor:", actor);

// Object.defineProperty(actor, "play", {
//   enumerable: false,
// });

// console.log(Object.keys(actor));

// for (const key in actor) {
//   console.log(key);
// }

// Object.defineProperty(actor, "phone", {
//   configurable: false,
// });

// Object.defineProperty(actor, "phone", {
//   writable: false,
// });

// // delete actor.phone;
// // actor.phone = 123;

// console.log("actor:", actor);

// Object.defineProperties(actor, {
//   play: {
//     writable: false,
//   },
//   email: {
//     enumerable: false,
//   },
// });

// console.log(Object.getOwnPropertyDescriptors(actor));

// const person = {
//   firstName: "John",
// };

// Object.defineProperty(person, "firstName", {
//   configurable: false,
// });

// Object.defineProperty(person, "firstName", {
//   writable: false,
// });

// Object.defineProperty(person, "firstName", {
//   configurable: true,
// });

// person.firstName = "123";

// const actor = {
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   play() {
//     console.log("I love you, Roza!");
//   },
// };

// console.log(Object.getOwnPropertyDescriptors(actor));

// writable - перезапис
// enumerable - присутність for in Object.keys()
// configurable - видалення конфігурація

// const actor1 = {
//   firstName: "Leo",
//   lastName: "Dicaprio",
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   salary: 150_000_000,
//   play() {
//     console.log("I love you, Roza!");
//   },
//   toString() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   valueOf() {
//     return this.salary;
//   },
//   // [Symbol.toPrimitive](hint) {
//   //   if (hint === "string") {
//   //     return `Symbol: ${this.firstName} ${this.lastName}`;
//   //   }
//   //   if (hint === "number") {
//   //     return this.salary + 1;
//   //   }
//   //   if (hint === "default") {
//   //     return this.salary + 10;
//   //   }
//   // },
// };

// const actor2 = {
//   firstName: "Jonee",
//   lastName: "Depp",
//   email: "leo@mail.com",
//   phone: "+306312312312",
//   salary: 70_000_000,
//   play() {
//     console.log("I love you, Roza!");
//   },
//   toString() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   valueOf() {
//     return this.salary;
//   },
//   // hint
//   // "string"
//   // "number"
//   // "default" + ==
//   [Symbol.toPrimitive](hint) {
//     if (hint === "string") {
//       return `Symbol: ${this.firstName} ${this.lastName}`;
//     }
//     if (hint === "number") {
//       return this.salary + 1;
//     }
//     if (hint === "default") {
//       return this.salary + 10;
//     }
//   },
// };

// console.log(String(actor2));
// console.log(Number(actor2));

// console.log(String(actor2));
// console.log(actor2);
// play() {
//   console.log("I love you, Roza!");
// },
// const actor = {
//   firstName: "Leo",
//   lastName: "Dicaprio",
//   email: "leo@mail.com",
//   films: ["Тітанік", "Джанго", "Початок"], // 438yfheue7y
//   plays: new Set(["Гамлет", "Король лір"]),
// play() {
//   console.log("I love you, Roza!");
// },
// };

// const strinifiedJSONActor = JSON.stringify(actor);
// const newActor = JSON.parse(strinifiedJSONActor);

// console.log("strinifiedJSONActor:", strinifiedJSONActor);

// const copyActor = Object.assign({}, actor); //438yfheue7y

// for (const key in actor) {
//   copyActor[key] = actor[key];
// }

// const copyActor = { ...actor }; //438yfheue7y

// const newActor = structuredClone(actor);

// actor.films.shift();
// console.log("actor:", actor);
// console.log("newActor:", newActor);

// console.log(number);
