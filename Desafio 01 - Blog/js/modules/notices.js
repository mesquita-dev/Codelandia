"use strict";

export default function initNotice() {
  const news = document.querySelectorAll("[data-notice]");

  setTimeout(() => {
    news[0].classList.add("active");
  }, 500);

  setTimeout(() => {
    news[1].classList.add("active");
  }, 1000);

  setTimeout(() => {
    news[2].classList.add("active");
  }, 1500);

  setTimeout(() => {
    news[3].classList.add("active");
  }, 2000);
}
