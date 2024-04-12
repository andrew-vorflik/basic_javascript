"use strict";

// console.log("start");

// Error object
// name - назва помилки
// message - текстове повідомлення з додатковою інформацією про помилку
// stack - Поточний стек викликів місце де саме виникла помилка

// try {
//   console.log("try");
//   console.log(null.toUpperCase());
//   // console.log("end try");
// } catch (error) {
//   console.log("error:", error.name);
// } finally {
//   console.log("Finally");
// }

// Error types
// ReferenceError
// TypeError
// SyntaxError

// console.log(null.toUpperCase());

// }}}}}}}}}

// document.querySelector("button").addEventListener("click", () => {
//   alert("You are logged in");
// });

// console.log("end");

// function foo() {
//   try {
//     return 1;
//   } catch (error) {
//     console.log("error:", error.name);
//   } finally {
//     console.log("Finally");
//   }
// }

// console.log("foo():", foo());

// const error = new Error("Наша помилка");
// console.log("error:", error);

// throw new Error("Наша помилка");

// document.querySelector("button").addEventListener("click", () => {
//   alert("You are logged in");
// });

// console.log("end");

// try {
//   const num1 = +prompt("Enter a number1");
//   const num2 = +prompt("Enter a number2");

//   if (num2 === 0) {
//     throw new Error("На нуль ділити не можна!");
//   }

//   console.log("result", num1 / num2);
// } catch (error) {
//   console.log("error:", error);
//   console.error(error.message);
// }

// Асинхронність

// 1. Асинхронні операції займають певний час
// 2. Можуть завершитись успішно або з помилкою

// Код виробник (producer)- сама асинхрона операція
// Код споживач (consumer) - код що очікує на результат операції

// const promise = new Promise(fucntion(resolve, reject) {
//   // Код виробник
//   if(ok) {
//     resolve(value);
//   } else {
//     reject(error)
//   }
// })

// // Код споживач

// promise.then((value) => {
//   // Код споживач все ок
//   console.log(value);
// }).catch((error) => {
//   // Код споживач помилка
//   console.log(error);
// });

// {
//   state:
//   result:
// }

// console.log("start");

new Promise((resolve, reject) => {
  console.log("executor");
  // resolve("Hello world");
  reject(new Error("Some error"));
})
  .then((result) => {
    console.log("then");
    // console.log(result);
  })
  .catch((error) => {
    console.log("catch");
    // console.log(error.message);
  });

// console.log("end");

// const promise = new Promise((resolve, reject) => {
//   let random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve("Я вдома");
//       reject(new Error("Пробито колесо"));
//     } else {
//       reject(new Error("Пробито колесо"));
//       resolve("Я вдома");
//     }
//   }, 1000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//     console.log("Добраніч!");
//     console.log(promise);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//     console.log("Нажаль!");
//     console.log(promise);
//   })
//   .finally(() => {
//     console.log("Бувай");
//   });

// console.log(promise);

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     throw new Error("Error");
//   }, 0);
// }).catch((error) => {
//   console.log("error:", error);
// });

// promise
//   .then((result) => {
//     console.log("then 1", result);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result.toUpperCase());
//       }, 2000);
//     });
//   })
//   .then((result) => {
//     console.log("then 1", result);
//     return result.toLowerCase();
//   })
//   .then((result) => {
//     console.log("then 2", result);
//     return result.toLowerCase();
//   })
//   .then((result) => {
//     console.log("then 3", result);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });

// function makeDish(title, time, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${title} готова!`);
//   }, time);
// }

// function makeDish(title, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Ваша страва ${title} готова!`);
//       resolve();
//     }, time);
//   });
// }

// makeDish("Борщ", 3000)
//   .then(() => {
//     return makeDish("Pasta", 2000);
//   })
//   .then(() => {
//     return makeDish("Coffee", 1500);
//   })
//   .then(() => {
//     return makeDish("Icecream", 500);
//   });

// function makeDish(title, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Ваша страва ${title} готова!`);
//     }, time);
//   });
// }

// function makeDish1(title, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Error`);
//     }, time);
//   });
// }

// const borsh = makeDish("borsh", 3000);
// const pasta = makeDish("pasta", 2000);
// const coffee = makeDish("coffee", 1500);
// const icecream = makeDish1("icecream", 500);

// const results = Promise.all([borsh, pasta, coffee, icecream]);
// const results = Promise.allSettled([borsh, pasta, coffee, icecream]);
// const results = Promise.race([borsh, pasta, coffee, icecream]);
// const results = Promise.any([borsh, pasta, coffee, icecream]);

// results
//   .then((results) => {
//     console.log("results:", results);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });

// Promise.resolve("Hello").then((result) => {
//   console.log("result:", result);
// });

// Promise.reject("Error").catch((error) => {
//   console.log("error:", error);
// });

// new Promise((resolve) => {
//   resolve("Hello");
// });

// new Promise((resolve, reject) => {
//   reject("Hello");
// });

// console.log("log 1"); // 1

// setTimeout(() => {
//   console.log("setTimeout 1"); // 6

//   Promise.resolve().then(() => {
//     console.log("promise setTimeout"); // 7
//   });
// }, 0);

// setTimeout(() => {
//   console.log("setTimeout 2"); // 8
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise 1"); // 3
// });

// queueMicrotask(() => {
//   console.log("queue mikrotask"); // 4
// });

// Promise.resolve().then(() => {
//   console.log("promise 2"); // 5
// });

// console.log("log 4"); // 2
