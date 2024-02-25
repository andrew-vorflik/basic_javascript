// "use strict";

// let name = "Vasya";

// name = 'Petya';
// console.log('user:', name);
// alert("Helrt");
// user = '123'
// console.log(window.location.href);

// let num = 4;
// // console.log( (1 + 2) * 3 + ++num);

// console.log(num++ + ++num);
// console.log(num);

// console.log(3 <= 3);

// console.log('а ' > 'а');
// console.log('банан' == 'банан');

// console.log(true > null);
// console.log("" == undefined);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean('0') == Boolean(0));

// console.log(null == undefined);
// console.log(null == null);
// console.log(undefined == undefined);

// console.log('' === 0);

// console.log('2' > '12');

// console.log(5 > 4)
// console.log(6 != 9)
// console.log("5" < 4)
// console.log("7" != 2)
// console.log(5 === "5")
// console.log("ананас" > "яблуко")
// console.log('біт' > 'біта')
// console.log('кіт' < 'кіт ')
// console.log("2" > "12")
// console.log(0 == null)
// console.log(false == NaN)
// console.log(' ' == 0)
// console.log(' ' === 0)
// console.log(null >= 0)
// console.log(undefined == null)
// console.log(undefined === null)



// if(2 > 3) {
//   console.log('Hello');
//   console.log('all!');
// } else if(true) {
//   console.log('Good bye!');
// }

// let degrees = 0;

// if(degrees === 4) {
//   console.log('Збираємо виноград!');
// } else if(degrees > 0) {
//   console.log('На вулиці +');
// } else if(degrees < 0) {
//   console.log('На вулиці -');
// } else if(degrees === 0) {
//   console.log('На вулиці 0');
// }

// console.log(undefined || 0 || 'qwe' || console.log(123));
// console.log(2 > 12 || 'a' < 'б');

// console.log(12 && 'wewe' && true && 'null');

// console.log(12 && null || NaN && 'hi!');
// console.log(null || NaN);

// console.log('hi' && 4 || null && true);

// console.log(!123);
// console.log(!0);
// console.log(!NaN);

/* 

  MARICHKA

*/


/* let isToxic = confirm('Are you toxic?');
let isLove = confirm('Do you love me?');
let marichkaSalary = 1000;

if(!isToxic && isLove) {
  let yourSalary = +prompt('Your salary');

  if(yourSalary > marichkaSalary) {
    console.log('Згодна!');
  } else {
    let isHandsome = confirm("Are you handsome?");

    if(isHandsome) {
      console.log('Згодна!');
    } else {
      console.log('Гарбуза! Не згодна!');
    }
  }
} else {
  console.log('Гарбуза! Не згодна!');
} */

/* 

  MARICHKA ONE LINE CONDITION

*/


/* let isToxic = confirm('Are you toxic?');
let isLove = confirm('Do you love me?');
let isHandsome = confirm("Are you handsome?");
let yourSalary = +prompt('Your salary');
let marichkaSalary = 1000;

  let isNotToxicAndLove = !isToxic && isLove;
  let isYourSalaryBigger = yourSalary > marichkaSalary;
  let isYourSalaryBiggerOrHandsome = isYourSalaryBigger || isHandsome;

if(isNotToxicAndLove && isYourSalaryBiggerOrHandsome) {
    console.log('Згодна!');
} else {
  console.log('Гарбуза! Не згодна!');
} */