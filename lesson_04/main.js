"use strict";

// let value = (2 > 3) ? 'більше' : "менше";
// console.log('value:', value);

// let moneyOnCard = 1000;
// let productCoast = 800;
// let method = (moneyOnCard > productCoast) ? "card" : "cash";

// if(moneyOnCard > productCoast) {
//   method =  "card";
// } else {
//   method = "cash";
// }
// console.log('method:', method);

// let user = 'user';
// let message = (user === "admin") ? "Привіт адмін" : "Привіт юзер";
// console.log('message:', message);
// умова ? знач1 : знач2

// let age = 10;

// let message = (age < 3) ? "Привіт крихітко!" :
// (age < 18) ? "Привіт хлопче!" :
// (age < 60) ? "Доброго дня" : "Вітаю!";

// console.log('message:', message);


// while(умова) {
//   // код
// }

// while(false) {
  // console.log('Hello');
// }


// console.log("End of program");

// let iterationCount = 3;

// while(iterationCount > 0) {
//   console.log("Hello", iterationCount);
//   iterationCount -= 2;
// }

// let i = 1;
// while(i !== 10) {
//   console.log(i);
//   i+= 2;
// }

// let i = 20;
// do {
//   console.log("Hello", i);
//   i++
// } while(i < 3)

// console.log("End of program");

// let message;
// do {
//   message = prompt("Enter message");
//   console.log(message);
// } while(message)

// for(let i = 0; i <= 10; i++) {
//   if(i !== 3) {
//     continue;
//   }

//   console.log(i);
// }

// let i = 0;
// while(i <= 10) {
//   if(i !== 3) {
//     continue;
//   }

//   console.log(i);
//   i++;
// }



// 1 - 3 5
// 2 - 1 4
// 9
// for (let i = 1; i <= numberOfFlats; i++) {
//   if(i === 3 || i === 5) {
//     continue;
//   }

//   if(i === 9) {
//     break;
//   }

//   console.log("Лист для квартири", i);
// }
// let numberOfFlats = 10;
// let entries = 3;
// let isAngry = false;

// 1 - 3 5
// 2 - 1 4
// 9
// entryLoop: for (let entry = 1; entry <= entries; entry++) {

//    for (let flat = 1; flat <= numberOfFlats; flat++) {
//     if(entry === 1 && (flat === 3 || flat === 5)) {
//       continue;
//     }

//     if(entry === 2 && (flat === 1 || flat === 4)) {
//       continue;
//     }

//     if(entry === 2 && flat === 9) {
//       break entryLoop;
//     }

//     console.log("Лист для квартири", flat);
//   }

//   console.log("Під'їзд", entry);
// }

// let userRole = 'user';

switch (userRole) {
  case "admin":       // userRole === "admin" || userRole === "user"
    console.log('Hi admin!');
    break;
  case "user":
      console.log('Hello user!');
      break;
  case "guest":
        console.log('Welcome!');
        break;
  default:
    console.log('I don`t know you!');
    break;
}

// let minute = 15;
// let hours = 7;

// if(minute === 15 && hours === 6) {
//   console.log("Rrrrrrring!!!!!");
// }



// 1 - 

// let num = 12;
// console.log('3' - 1);

// 

// console.log('typeof user:', typeof user)



// if (typeof user === "string") {
//     console.log("Ласкаво просимо!");
// } else {
//     console.log("Пароль не вірний");
// }
//with (while)
// function fib(n) {
//   let a = 1;
//   let b = 1;
//   let result = 1;

//   for (let i = 3; i <= n; i++) {
//     result = a + b;
//     a = b;
//     b = result;
//   }

//   return result;
  
// }

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(9));



let value = prompt("Enter a number");

if(value) {

}
