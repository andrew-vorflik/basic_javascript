"use strict";

// arguments
// function foo(mum1, num2) {
//   Array.prototype.forEach.call(arguments, (item) => {
//     console.log("item:", item);
//   });
// }

// foo(2, 4, 6, 8);

// Call stack

// function a() {
//   // code
//   b();
//   // code
// }
// function b() {
//   // code
//   c();
//   // code
// }
// function c() {
//   // code
// }

// a();

// Рекурсія

// function a(num) {
//   a(num + 1);
// }

// a(1);

// function recursionLog(num) {
//   console.log(num);

//   if (num <= 0) {
//     return;
//   }

//   recursionLog(num - 1);
// }

// recursionLog(10);

// function sum(num) {
//   if (num <= 1) {
//     return 1;
//   }

//   return num + sum(num - 1);
// }

// console.log(sum(5));

// const company = {
//   development: [
//     { name: "Serhiy", salary: 2000 },
//     { name: "Dmutro", salary: 1500 },
//   ],
//   qa: {
//     manual: {
//       junior: [{ name: "Dmutro", salary: 1000 }],
//       senior: [{ name: "Anna", salary: 2000 }],
//     },
//     auto: [{ name: "Ivan", salary: 1500 }],
//   },
//   design: [
//     { name: "Khalil", salary: 3000 },
//     { name: "Illya", salary: 1000 },
//   ],
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((acc, employee) => {
//       return acc + employee.salary;
//     }, 0);
//   } else {
//     let sum = 0;

//     for (const key in department) {
//       sum += sumSalaries(department[key]);
//     }

//     return sum;
//   }
// }

// console.log(sumSalaries(company));

// Замикання

// function createAddLikes() {
//   let likes = 0;

//   return function () {
//     return ++likes;
//   };
// }

// const addLikePost1 = createAddLikes();
// const addLikePost2 = createAddLikes();

// console.log("----post1----");
// console.log(addLikePost1());
// console.log(addLikePost1());
// console.log(addLikePost1());

// console.log("----post2----");
// console.log(addLikePost2());
// console.log(addLikePost2());
// console.log(addLikePost2());

// ExecutionContext {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//       var1: 10
//       var2: 20,
//       func(){}
//     },
//     [[Enviroment]]: null,
//   }
//   thisBinding: window,
// }

// 2 types
// - Global
// - Function

// Global EX
// 1. window / global (Global)
// 2. this = Global

// lexicalEnviroment = {
//   Enviromentrecord: {
//     var1: 10
//     var2: 20,
//     func(){}
//   },
//   [[Enviroment]]: null,
// }

// 2 phazes
// 1. Create (memory)
// 2. Execute (run code)

let a = 2;
var b = 3;

function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let sum1 = sum(a, b);
let sum2 = sum(5, 10);

// 1 Create
// ExecutionContext Global {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//      a: uninicialized,
//      b: undefined,
//      sum(),
//     sum1: uninicialized,
//     sum2: uninicialized,
//     },
//     [[Enviroment]]: null,
//   }
//   thisBinding: window,
// }

// 2 Execute

// ExecutionContext Global {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//      type: "Global"
//      a:2,
//      b: 3,
//      sum(),
//     sum1: 5,
//     sum2: 15,
//     },
//     [[Enviroment]]: null,
//   }
//   thisBinding: window,
// }

// 1 Create Function
// ExecutionContext Function {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//      type: "Function"
//      arguments: [2, 3],
//      sum: uninicialized,
//     },
//     [[Enviroment]]: Global.Enviromentrecord,
//   }
//   thisBinding: window,
// }

// 2 Execute Function
// ExecutionContext Function {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//      type: "Function"
//      arguments: [2, 3],
//      sum: 5,
//     },
//     [[Enviroment]]: Global.Enviromentrecord,
//   }
//   thisBinding: window,
// }

// 1 Create Function
// ExecutionContext Function {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//      type: "Function"
//      arguments: [5, 10],
//      sum: uninicialized,
//     },
//     [[Enviroment]]: Global.Enviromentrecord,
//   }
//   thisBinding: window,
// }

// 2 Execute Function
// ExecutionContext Function {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//      type: "Function"
//      arguments: [2, 3],
//      sum: 15,
//     },
//     [[Enviroment]]: Global.Enviromentrecord,
//   }
//   thisBinding: window,
// }

// 2 Execute Function createAddLikes()
// ExecutionContext Function {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//      type: "Function"
//     likes: 1
//      fun(){}
//     },
//     [[Enviroment]]: Global.Enviromentrecord,
//   }
//   thisBinding: window,
// }

// 2 Execute Function addLikes()
// ExecutionContext Function {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//     },
//     [[Enviroment]]: createAddLikes.Enviromentrecord,
//   }
//   thisBinding: window,
// }

// 2 Execute Function createAddLikes()
// ExecutionContext Function {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//      type: "Function"
//     likes: 0
//      fun()
//     },
//     [[Enviroment]]: Global.Enviromentrecord,
//   }
//   thisBinding: window,
// }

// 2 Execute Function addLikes()
// ExecutionContext Function {
//   lexicalEnviroment = {
//     Enviromentrecord: {
//     },
//     [[Enviroment]]: createAddLikes.Enviromentrecord,
//   }
//   thisBinding: window,
// }
