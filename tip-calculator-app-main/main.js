const form = document.querySelector("#form");
const btn = document.querySelector("#btn-submit");
const input = document.querySelectorAll(".input");
const pass = document.querySelectorAll("#password");
const errorIcon = document.querySelector(".error-icon");
const errorMeg = document.querySelector(".error-msg");
const dark = document.querySelector(".dark");
const html = document.querySelector("html");
const img = document.querySelector(".img");

form.addEventListener("submit", showError);

function showError(e) {
  //e.preventDefault();
  for (let i = 0; i < input.length; i++) {
    if (
      input[i].value == "" ||
      input[i].value.includes("@gmail.com") == false
    ) {
      e.preventDefault();
      errorIcon.classList.add("visible");
      errorMeg.classList.add("visible");
    }
  }}

//   setTimeout(() => {
//     errorIcon.classList.remove("visible");
//     errorMeg.classList.remove("visible");
//     inputEmail.value = "";
//   }, 3000);
// }

// dark.addEventListener("click", () => {
//   html.classList.toggle("invert");
//   img.classList.toggle("invert");

//   // if (html.classList.replace("invert") == false)
//   //   html.classList.add("invert");
//   // else html.classList.remove("invert");

//   if (dark.textContent == " light") dark.textContent = " dark";
//   else dark.textContent = " light";
// });
