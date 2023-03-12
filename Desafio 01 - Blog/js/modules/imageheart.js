"use strict";

export default function initImageHeart() {
  const imageHeart = document.querySelectorAll("[data-image]");

  function filledHeart(index) {
    imageHeart[index].classList.toggle("filled");
  }

  imageHeart.forEach((image, index) => {
    image.addEventListener("click", () => {
      filledHeart(index);
    });
  });
}
