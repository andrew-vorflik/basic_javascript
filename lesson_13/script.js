const number = 100;

function sayHi() {
  console.log("Hello");
}

const obj = {
  name: "John",
  array: [2, 4],
  sayHi() {
    console.log("Hi! object");
  },
};

const newObj = _.cloneDeep(obj);

obj.array.shift();
console.log("newObj:", newObj);
newObj.sayHi();

export { number, sayHi as sayHello, obj };
