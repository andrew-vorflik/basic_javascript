// MISTAKES

// ==== 1 return console.log() ====

// function multiple2(number) {
//   return number * 2;
// }

// let result = multiple2(2);
// console.log('result:', result);
// alert(result);


// let multipleResult = multiple2(4);
// console.log('multipleResult:', multipleResult)

// let result = console.log(12);
// console.log("result:", result);

// // ==== 2 if else ====

// if (true) {
//   // ...
// } else {
//   console.log("...");
// }

// ==== 3 typeof ====

// let value = "Hello";

// console.log(typeof value === Number);
// console.log(typeof num) // "number"
// console.log('Number:', Number("123"));


// QUESTIONS

// ====== Question 1 =======
// let obj1 = { name: "John" }; // xPHO8ueh8hdc
// let obj2 = obj1; // xPHO8ueh8hdc

// console.log(obj1 === obj2);

// ====== Question 2 =======
// let series = ["Game of thrones", "Sherlock", "Friends"];
// series.pop();
// series.shift();
// series.push("Wednesday");

// console.log(series.length);
// console.log(series);

// ====== Question 3 =======
// let user = {
//   firstName: "John",
//   lastName: "Snow",
//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// let user2 = {
//   firstName: "Arya",
//   lastName: "Stark",
//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user2.showFullName = user.showFullName;

// user.showFullName();
// user2.showFullName();


// split join
// let str = "Hello our world";

// let result = str.split('', 10);
// console.log('result:', result)

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(array.at(-2));

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];
// let japanCars = ["Honda", "Nissan", "Mazda"];
// let numbers = [1,2,3]

// let result = array.concat(japanCars, numbers, true, false, "ghbdsn");

// console.log(result);
// console.log('array:', array);

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// let result = array.slice(-3);
// console.log('result:', result);

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari", "Audi"];

// let result1 = array.indexOf();
// let result2 = array.lastIndexOf();
// console.log('result:', result1);

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari", "Audi", NaN];

// let result1 = array.indexOf(NaN);
// let result = array.includes(NaN);
// console.log('result:', result, result1);

// let array = [[1,2,3], ["Hello", "Java", "Script"]];
// console.log('array:', array[0].concat(array[1]));

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari", "Audi"];
// // slice(start, deleteCount, elems)
// array.splice(1, 1);
// array.splice(2, 1);
// console.log('array:', array);

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari", "Audi"];

// let result = array.with(2, "Honda");
// console.log('result:', result);

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// let result = array.toReversed();
// console.log('result:', result)
// console.log('array:', array)


// console.log('to spliced:', array.toSpliced(1,1, "Honda"));
// console.log('array:', array);

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let people = [{name: "Іван"}, {name: "Ілля"}, {name: "Сергій"}, {name: "Зеновія"}, {name: "Діана"}];

// array.forEach((item, index, arr) => {
//   array.push('111');
//   console.log('item:', item);
// });

// console.log('array:', array);

// let result = numbers.map((item, index, array) => {
//   return item * 2;
// });

// console.log('result:', result)

// let result = people.filter((item, index, array) => {
//   return item.name.length <= 4;
// })

// console.log('result:', result);

// find, findIndex, findLast, findLastIndex
// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// let result = array.find((item, index, array) => {
//   return item.toLowerCase().includes('a');
// })

// console.log('result:', result);

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari", 123];

// let result1 = array.every((item, index, array) => {
//   return typeof item === "string";
// })

// let result2 = array.some((item, index, array) => {
//   return typeof item === "number";
// })

// console.log('result:', result1, result2);

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let result = numbers.reduce((acc, item) => {
//   acc += item;
//   return acc;
// }, 0);

// console.log('result:', result);

// let people = [{name: "Іван"}, {name: "Ілля"}, {name: "Сергій"}, {name: "Зеновія"}, {name: "Діана"}];

// let result = people.reduce((acc, item) => {
//   if(!acc[item.name.length]) {
//     acc[item.name.length] = [];
//   }

//   acc[item.name.length].push(item);
//   return acc;
// }, {});

// console.log('result:', result);

// {
//   4: [{{name: "Іван"}}],
//   6: [{name: "Сергій"}],
// }

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// let people = [{name: "Іван"}, {name: "Ілля"}, {name: "Сергій"}, {name: "Зеновія"}, {name: "Діана"}];

// let numbers = [3, 1, 5, 8, 5, 9, 2];

// let numbers = [1, 3, 2,  5, 9, 8];

// let compareNumbers = (a, b) => {
//   return a > b ? -1 : 1;
// }

// numbers.sort(compareNumbers);
// console.log('result:', numbers);

// let value = [123];
// console.log( Array.isArray(value) );

// let array = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari", "Audi"];
// let array2 = ["Honda", "Mazda", "Infinity", "Toyota"];
// let numbers = [1, 3, 2,  5, 9, 8];

// array.splice(0, 0, ...array2);
// console.log('array:', array);
// console.log('numbers:', ...numbers)
// console.log(...array);

// console.log('Math.max(numbers):', Math.max(...numbers));
// console.log('Math.max(numbers):', Math.max(1, 3, 2, 5, 9, 8));

// console.log([...numbers, ...array]);

// // slice(start, deleteCount, elems)
// array.splice(1, 1);
// array.splice(2, 1);


function arrayDiff(a, b) {
  let result = [];
  
  if(a.length === 0) {
    return [];
  }
  
  if(b.length === 0) {
    return a;
  }
  
  result = a.filter((item) => {
    console.log('item', a,  item);
  
    for(let i = 0; i < b.length; i++) {
      if(b[i] === item) {
        return false;
      }      
    }

    return true;
  })
  
  console.log(result)

  return result;
}

arrayDiff([1,2,3], [1,2]);

