var selected = document.querySelectorAll("h3");

for (var i = 0; i < selected.length; i++) {
  selected[i].addEventListener("click", function () {
    this.style.color = "#000";


    var p = this.nextElementSibling;
    p.classList.toggle("hidden");

    var image = this.firstElementChild;
    image.classList.toggle("rotate");

  });
}
