"use strict";


// function sayHello() {
//   console.log('Hello world!');
// }



// sayHello();
// sayHello();
// sayHello();

// function makeShaurma(param = "Куркою", price = 50) { // param === undefined
//   console.log(`Тримайте вашу шаурму із ${param}. З вас ${price} гривень.`);
// }


// makeShaurma();
// makeShaurma(undefined, 40);
// makeShaurma("Грибами", 25);

// function sum(a, b) {
//   return a + b;
// }


// let result = sum(2, 3);
// console.log('result:', result);





// function hiRole(userRole = "user") {
//   if(typeof userRole !== "string" ) {
//     return;
//   }


//   switch (userRole) {
//     case "admin":       // userRole === "admin" || userRole === "user"
//       return 'Hi admin!';
//     case "user":
//       return 'Hello user!';
//     case "guest":
//       return 'Welcome!';
//     default:
//       return 'I don`t know you!';
//   }
// }

// console.log( hiRole("qweqweqw") );

// const userName = "John";

// // function name1() {
//   //   let userName = "Oleg";
  
//   //   console.log('func:', userName);
//   //   return;
//   // }
  
//   // name1();
  
//   // console.log('global:', userName);
  
  
  
//   if(true) {
//     userName = "Oleg";
//     console.log('if:', userName)
//   }


//   console.log('global:', userName)

// function foo(...rest) {
//   let result = 0;

//   for (let index = 0; index < rest.length; index++) {
//      result += rest[index];
//   }


//   return result;
// }

// console.log('foo():', foo(1, 2, 3, 4, 5));


// func()

// if(true) {
//   function func() {
//     console.log("function declaration");
//   }
// }

// function declaration
// function func() {
//   console.log("function declaration");
// }

// func();




// // function expression
// let func2 = function() {
//   console.log("function expression");
// }
// func2();

// // arrow function
// let func3 = (a) => {
//   return a + "hi!";
// }
// func3();

// let func2;

// if(false) {

//   func2 = function() {
//     console.log("function expression");
//   }

// } else {
//   func2 = function() {
//     console.log("function expression 2");
//   }
// }

// func2();
// if(true) {
//   function func() {
//     console.log("function declaration");
//   }
// }

// console.log( func3(1) );

// let func4 = new Function('a', 'b', "return a + b");
// console.log( func4(1, 2));

// function func() {
//   console.log("func");
// }


// let otherFunc = func;
// func();
// otherFunc();

// alert( func );

// function sayHi(age, callback) {
//   if(age > 18) {
//     callback("hello");
//   }
// }

// function sayHello(message) {
//   alert(message);
// }

// sayHi(20, sayHello);


// let userName = 'John';
// userName = 'Oleg';

// console.log('edit:', userName);

// if(true) {
//   let userName = 'Ivan';
//   console.log('if:', userName)
// }


// console.log('golbal:', userName)

