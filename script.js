const icone = document.querySelector(".navbar-mobile i");
const modal = document.querySelector(".modal");

icone.addEventListener("click", function () {
  icone.classList.toggle("fa-times");
  modal.classList.toggle("modal-change");
});
