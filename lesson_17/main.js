"use strict";
// console.log("document.body:", document.body);

// console.dir(document.body.firstElementChild);
// console.dir(document.body.lastElementChild);
// console.dir(document.body.children);

// const firstLi = document.querySelector("li");
// const secondLi = document.querySelectorAll("li")[1];
// innerHTML;
// innerTEXT;
// outerHTML;

// console.log(firstLi.innerHTML);
// console.log(firstLi.outerHTML);
// firstLi.innerText = "Перший елемент";
// secondLi.innerHTML = `<button>${secondLi.innerHTML}</button>`;
// console.log("secondLi.innerHTML:", secondLi.outerHTML);
// secondLi.outerHTML = `<button>${secondLi.innerHTML}</button>`;

// elem.before()
// elem.after()
// elem.prepend()
// elem.append()

// const h3 = document.createElement("h3");
// console.log("h3:", h3);
// h3.innerHTML = "Заголовок 3";

// document.body.append(h3);

// const ol = document.querySelector("ol");

// const li = document.createElement("li");
// li.innerText = "before";

// ol.before(li);

// const liAfter = document.createElement("li");
// liAfter.innerText = "after";

// ol.after(liAfter);

// const liAppend = document.createElement("li");
// liAppend.innerText = "append";

// ol.append(liAppend);

// const liPrepend = document.createElement("li");
// liPrepend.innerText = "prepend";

// ol.prepend(liPrepend);

// li.remove();
// liAfter.remove();
// liAppend.remove();

// const h2 = document.querySelector("h2");

// clsssList
// elem.classList.add()
// elem.classList.remove()
// elem.classList.toggle()
// elem.classList.contains()

// console.log("h2.classList:", h2.classList);

// h2.classList.add("underline");
// h2.classList.remove("header-2");
// h2.classList.toggle("header-2");

// console.log(
//   'h2.classList.contains("header-2"):',
//   h2.classList.contains("header-2")
// );

// const h2 = document.querySelector("h2");

// h2.style.color = "green";
// h2.style.backgroundColor = "gray";

// EVENTS
// const header2 = document.querySelector("h2");

// // header2.onclick = function () {
// //   console.log("Hello 2");
// // };

// function addEventListener(eventType, cb) {
//   const eventObject = {
//     //
//   };

//   cb(eventObject);
// }

// const addClick = (e) => {
//   console.log("Hello 3");
// };

// header2.addEventListener("click", addClick);

// setInterval(() => {
//   header2.removeEventListener("click", addClick);
// }, 5000);

// header2.addEventListener("click", (event) => {
//   // console.log("event:", event.type);
//   // console.log("event:", event.target);
//   console.log("event.clientX:", event.clientX);
//   console.log("event.clientY:", event.clientY);
// });

// const rect = document.querySelector(".rect");

// rect.addEventListener("mousemove", (event) => {
//   event.target.innerHTML = `X: ${event.clientX} Y: ${event.clientY}`;
// });

// rect.addEventListener("contextmenu", (event) => {
//   console.log("contextmenu");
// });

// mousedown - mouseup
// mouseover - mouseout
// mousemove - рух мишею
// contextmenu - правий клік
// click
// dbclick

// keydown
// keyup

// document.addEventListener("keyup", (event) => {
//   console.log("event:", event.code);
//   if (event.ctrlKey && event.code === "KeyZ") {
//     console.log("Відміна");
//   }
// });

// const LIMIT = 30;

// const textarea = document.querySelector("textarea");
// const count = document.querySelector(".count");

// count.innerHTML = LIMIT;

// textarea.addEventListener("keyup", (event) => {
//   if (event.target.value.length > LIMIT) {
//     alert("Привищена кількість символів");
//     event.target.style.borderColor = "red";
//   } else {
//     event.target.style.borderColor = "black";
//     count.innerHTML = LIMIT - event.target.value.length;
//   }
// });

const CREDENTIALS = {
  email: "vasyapupkin@mail.com",
  pass: "12345",
};

const enteredCredentials = {
  email: "",
  pass: "",
};

function hideModal() {
  background.classList.remove("show");
}

function showModal() {
  background.classList.add("show");
}

const loginBtn = document.querySelector(".login");
const background = document.querySelector(".background");
const close = document.querySelector(".close");
const email = document.querySelector("input[type='email']");
const pass = document.querySelector("input[type='password']");
const signInBtn = document.querySelector(".signin-btn");

loginBtn.addEventListener("click", () => {
  showModal();
});

background.addEventListener("click", (event) => {
  if (event.target === background) {
    hideModal();
  }
});

document.addEventListener("keyup", (event) => {
  console.log("event:", event);
  if (event.code === "Escape") {
    hideModal();
  }
});

close.addEventListener("click", (event) => {
  hideModal();
});

email.addEventListener("input", (event) => {
  enteredCredentials.email = event.target.value;
  console.log("enteredCredentials:", enteredCredentials);
});

pass.addEventListener("input", (event) => {
  enteredCredentials.pass = event.target.value;
  console.log("enteredCredentials:", enteredCredentials);
});

signInBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    CREDENTIALS.email === enteredCredentials.email &&
    CREDENTIALS.pass === enteredCredentials.pass
  ) {
    alert("Вхід виконано!");
    hideModal();
  } else {
    alert("Вхід заборонено!");
  }
});
