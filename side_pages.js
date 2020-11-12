//Footer slide-out info on click
const arrowfirst = document.querySelector(".arrow-first");
const arrowsecond = document.querySelector(".arrow-second");
const arrowthird = document.querySelector(".arrow-third");
const listfirst = document.querySelectorAll(".list-first");
const listsecond = document.querySelector(".list-second");
const listthird = document.querySelector(".list-third");

arrowfirst.addEventListener("click", function () {
  listfirst.forEach(function (item) {
    item.classList.toggle("list-block");
  });
});
arrowsecond.addEventListener("click", function () {
  listsecond.classList.toggle("list-block");
});
arrowthird.addEventListener("click", function () {
  listthird.classList.toggle("list-block");
});
//Slide out menu on click
const burger = document.querySelector(".burger");
const logo = document.querySelector(".navbar-logo");
const ul = document.querySelector(".main-nav-list");

burger.addEventListener("click", function () {
  ul.classList.toggle("nav-active");
});

logo.addEventListener("click", function () {
  ul.classList.remove("nav-active");
});
