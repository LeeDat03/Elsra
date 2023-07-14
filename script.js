"use strict";

// NAVIGATION
const header = document.querySelector(".header");
const btnNav = document.querySelector(".nav__mobile");
const navLink = document.querySelectorAll(".nav__link");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav__open");
});

navLink.forEach((link) =>
  link.addEventListener("click", function () {
    header.classList.toggle("nav__open");
  })
);

// CONTROL ELE IN BUILT_IN
const btnControl = document.querySelector(".built-for__control");
const btnBuilt = document.querySelectorAll(".btn__built");
const btnDescript = document.querySelectorAll(".built-for__description");

btnControl.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn__built");

  if (!clicked) return;

  console.log(clicked);
  // Remove all selected item
  btnBuilt.forEach((btn) => btn.classList.remove("btn__built--active"));
  btnDescript.forEach((btn) =>
    btn.classList.remove("built-for__description--active")
  );

  // Add clicked item
  clicked.classList.add("btn__built--active");
  document
    .querySelector(`.built-for__description--${clicked.dataset.tab}`)
    .classList.add("built-for__description--active");
});
