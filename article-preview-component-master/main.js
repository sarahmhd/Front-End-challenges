const btn = document.querySelector("button");
const box = document.querySelector(".hidden");

btn.addEventListener("click", showBox);

function showBox() {
  btn.style.backgroundColor = "#48556a";
  box.classList.toggle("visible");
  // box.classList.add("visible");

  // setTimeout(() => {
  //   box.classList.remove("visible");
  //   btn.style.backgroundColor = "#ecf2f8";
  // }, 7000);
  console.log("done");
}
