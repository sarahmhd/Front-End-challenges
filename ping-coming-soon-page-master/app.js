let input = document.querySelector("input");
let btn = document.querySelector("button");

function addmessage() {
  const regex =
  '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
  if (input.value == " " || input.value.match(regex))
    document.querySelector(".error").classList.add("show");
}

btn.addEventListener("click", addmessage);
// let timer = setInterval(addmessage, 3000);
