//Switch color of active link
const link = document.querySelectorAll(".main-nav-link");
const ul = document.querySelector(".main-nav-list");

link.forEach(function (item) {
  item.addEventListener("click", function (e) {
    ul.querySelector(".current").classList.remove("current");
    ul.classList.remove("nav-active");
    item.classList.add("current");
  });
});

//Change active link in section on scroll
window.addEventListener("scroll", function (e) {
  const fromTop = window.scrollY + 100;

  link.forEach(function (item) {
    const section = document.querySelector(item.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      item.classList.add("current");
    } else {
      item.classList.remove("current");
    }
  });
});

//Slider
const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParent = document.querySelector(".carousel-wrapper-controls ul");

let sectionIndex = 0;

document
  .querySelectorAll(".carousel-wrapper-controls li")
  .forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      sectionIndex = index;
      indicatorParent.querySelector(".selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
    });
  });

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  indicatorParent.querySelector(".selected").classList.remove("selected");
  indicatorParent.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  indicatorParent.querySelector(".selected").classList.remove("selected");
  indicatorParent.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

//Scroll-up button active on scroll
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function (e) {
  if (window.pageYOffset > 800) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//Slide out menu on click
const burger = document.querySelector(".burger");
const logo = document.querySelector(".navbar-logo");

burger.addEventListener("click", function () {
  ul.classList.toggle("nav-active");
});

logo.addEventListener("click", function () {
  ul.classList.remove("nav-active");
});

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

//Language Switcher
const languageList = document.getElementById("language-list");
const lastLanguageList = document.getElementById("language-list-last");

languageList.addEventListener("click", function () {
  lastLanguageList.classList.toggle("list-display");
});
