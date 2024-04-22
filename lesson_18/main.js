"use strict";

let result = null;
let isLoading = false;

function setLoading() {
  const headerLoading = document.querySelector(".loading");
  headerLoading.style.display = "block";
}

function setNotLoading() {
  const headerLoading = document.querySelector(".loading");
  headerLoading.style.display = "none";
}

function setError(message) {
  const errorLoading = document.querySelector(".error");
  const span = errorLoading.querySelector("span");
  span.innerHTML = message;
  errorLoading.style.display = "block";
}

function setNotError() {
  const errorLoading = document.querySelector(".error");
  const span = errorLoading.querySelector("span");
  span.innerHTML = "";
  errorLoading.style.display = "none";
}

// function getData(url) {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       result = response;
//       renderNames(result);
//     });
// }

// async function getDataAsync(url) {
//   console.log("async await");
//   try {
//     setNotError();
//     setLoading();
//     const response = await fetch(url);
//     console.log("response:", response);
//     const responseObj = await response.json();
//     console.log("responseObj:", responseObj);
//     renderNames(responseObj);
//   } catch (error) {
//     console.log(error);
//     setError(error.message);
//   } finally {
//     setNotLoading();
//   }
//   console.log("async await end");
// }

// function renderNames(response) {
//   console.log("response:", response);
//   const ul = document.querySelector("ul");
//   const buttonPrev = document.createElement("button");
//   const buttonNext = document.createElement("button");
//   buttonPrev.innerHTML = "Prev";
//   buttonNext.innerHTML = "Next";
//   if (!response.next) {
//     buttonNext.setAttribute("disabled", true);
//   }
//   if (!response.previous) {
//     buttonPrev.setAttribute("disabled", true);
//   }

//   buttonNext.addEventListener("click", () => {
//     if (response.next) {
//       ul.innerHTML = "";
//       getDataAsync(response.next);
//     }
//   });

//   buttonPrev.addEventListener("click", () => {
//     if (response.prev) {
//       ul.innerHTML = "";
//       getDataAsync(response.previous);
//     }
//   });

//   const names = response.results.map((person) => {
//     return person.name;
//   });

//   names.forEach((name) => {
//     const li = document.createElement("li");
//     li.innerHTML = name;
//     ul.append(li);
//   });

//   document.body.append(buttonPrev);
//   document.body.append(buttonNext);
// }

// // getData("https://swapi.dev/api/people/");

// getDataAsync("https://swapi.dev/api/people/");

let postsCount = 0;

async function getUsers() {
  const response = await fetch("http://localhost:3000/posts");
  const responseObj = await response.json();
  console.log("responseObj:", responseObj);
  renderPosts(responseObj);
  postsCount = responseObj.length;
}

getUsers();

function renderPosts(posts) {
  const postsList = document.querySelector(".posts");

  posts.forEach((post) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const buttonDelete = document.createElement("button");

    li.classList.add("post");

    h3.innerHTML = `${post.id} ${post.title}`;
    p.innerHTML = post.body;
    buttonDelete.innerHTML = "Delete";

    h3.append(buttonDelete);
    li.append(h3);
    li.append(p);

    buttonDelete.addEventListener("click", () => {
      fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
    });

    postsList.append(li);
  });
}

const inputTitle = document.querySelector(".title");
const inputBody = document.querySelector(".body");
const btnCreate = document.querySelector(".create-btn");

btnCreate.addEventListener("click", (event) => {
  event.preventDefault();

  const title = inputTitle.value;
  const body = inputBody.value;
  const id = postsCount + 1;

  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title,
      body,
      id,
    }),
  });
});
