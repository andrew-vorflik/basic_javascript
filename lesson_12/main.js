"use strict";

// function Cat(name) {
//   this.name = name;
// }

/*
Cat.prototype = {
  constructor: Cat,
  sayHi() {...}
}
*/

// Cat.prototype.sayHi = function () {
//   console.log(`Привіт! Мене звуть ${this.name}`);
// };

// // const tom = new Cat("Tom");
// // const garfield = new Cat("Garfield");
// const garfield = {
//   name: "Garfield",
// };
// Object.setPrototypeOf(garfield, Cat.prototype); // [[Prototype]]: Cat.prototype

// const tom = Object.create(Cat.prototype); // [[Prototype]]: Cat.prototype
// tom.name = "Tom";
// console.log("tom:", tom);
// // {
// //   name: "Tom";
// // [[Prototype]]: Cat.prototype
// // }

// tom.sayHi(); // [[Prototype]]: Cat.prototype
// garfield.sayHi(); // [[Prototype]]: Cat.prototype

// // console.log(Object.getPrototypeOf(tom));
// const obj = Object.create(null); // [[Prototype]]:null
// console.log("tom2:", tom2);
// obj.toString();

// Object.setPrototypeOf(obj, Object.prototype);

// function UserFunc(name) {
//   this.name = name;
// }

// UserFunc.prototype.sayHi = function () {
//   console.log(`Привіт! Мене звуть ${this.name}`);
// };

// const userFromFunc = new UserFunc("Василь");

// userFromFunc.sayHi();

// [[IsClassConstructor]]: true
// class User {
//   "use strict";
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Привіт! Мене звуть ${this.name}`);
//   }
// }

// const userFromClass = new User("Марія");
// const userFromClass2 = new User("Іван");

// console.log("userFromClass:", userFromClass);

// userFromClass.sayHi();

// class User {
//   #accessRight = 110;
//   #location = "";
//   role = "USER";

//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   logout() {
//     console.log("I`m logged out");
//   }

//   login() {
//     console.log("I`m logged in");
//   }

//   changeProductPrice(product, newPrice) {
//     if (this.#accessRight >= 100) {
//       product.price = newPrice;

//       this.#sandNotification(`Ціна ${product.title} змінена на ${newPrice}`);
//     } else {
//       console.log("Невистачає прав!");
//     }
//   }

//   #sandNotification(message) {
//     console.log(`Notification: ${message}`);
//   }

//   static locations = ["Lviv", "Kharkiv", "Kyiv"];

//   static addLocation(newLocation) {
//     this.locations.push(newLocation);
//   }

//   get location() {
//     return this.#location;
//   }

//   set location(newLocation) {
//     if (User.locations.includes(newLocation)) {
//       this.#location = newLocation;
//     } else {
//       console.log("Такої локації не існує");
//     }
//   }
// }

// const iPhone = {
//   title: "15 iPhone",
//   price: 950,
// };

// const ivan = new User("Ivan", "ivan@mail.com");
// const mariya = new User("Mariya", "mariya@mail.com");
// mariya.login();
// mariya.logout();
// // console.log("mariya.name:", mariya);

// console.log("User:", User.locations);
// User.addLocation("Odessa");
// console.log("mariya.location:", mariya.location);

// console.log("iPhone:", iPhone);
// mariya.changeProductPrice(iPhone, 800);
// console.log("iPhone:", iPhone);

// console.log("mariya.location :", mariya.location);
// mariya.location = "Kharkiv";

class Animal {
  constructor(type) {
    this.type = type;
  }

  run() {
    console.log("Я біжу");
  }
  sleep() {
    console.log("Я сплю");
  }
  getType() {
    console.log(`${this.type}`);
  }
}

class Cat extends Animal {
  constructor(type, name) {
    super(type);
    this.name = name;
  }

  // constructor(...args) {
  //   super(...args);
  // }

  play() {
    console.log("Я граю");
  }

  eat() {
    console.log("Я їм");
    // super.sleep();
  }

  sleep() {
    //  [[Homobject]]
    super.sleep();
    console.log("І храплю");
  }
}

class Stepan extends Cat {
  constructor(type, name) {
    super(type);
    this.name = name;
  }

  sleep() {
    super.sleep();
  }
}
const cat = new Cat("Савець");

// cat.play();
// cat.run();
// cat.sleep();
// cat.getType();
// // cat.eat();
// cat.sleep();

// console.log("cat:", cat);

// console.log(cat instanceof Cat);
// console.log(cat instanceof Animal);
// console.log(cat instanceof Array);
// console.log([] instanceof Array);

// const stepan = new Stepan("Савець", "Степан");
// stepan.sleep();

// Інкапсуляція
// Наслідування
// Поліморфізм

// const user = {
//   name: "name",
//   phone: 123,
//   email: "1231",
//   login() {},
// };

// const admin = {
//   __proto__: user,
//   deleteUser() {},
// };

// const figure = {
//   // a: 0,
//   // b: 0,
//   getSquare() {
//     // return slkfjseofj
//   },
// };

// const rectangle = {
//   __proto__: figure,
// };

// const triangle = {
//   getSquare() {
//     // return slkfjseofj
//   },
//   __proto__: figure,
// };

// const circle = {
//   getSquare() {
//     // return slkfjseofj
//   },
//   __proto__: figure,
// };

// const arrayFigures = [rectangle, triangle, circle];

// const squareFigures = arrayFigures.map((figura) => {
//   return figura.getSquare();
// });

// class Class {
//   constructor() {
//     // dvmdlskv
//   }

//   hello() {
//     console.log("Hello world");
//   }
// }

// cat.getNewGu(new Gun('M16'));

// new RegExp( [^A-Za-z0-9_])
