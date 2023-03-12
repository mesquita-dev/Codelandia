const linksPrevent = document.querySelectorAll("[data-prevent]");

linksPrevent.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const form = document.querySelector("form");
const formEmail = document.querySelector("#email");
const formPassword = document.querySelector("#password");
const inputsRequired = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function setError(index) {
  inputsRequired[index].style.border = "2px solid #e63636";
  span[index].style.display = "block";
}

function removeError(index) {
  inputsRequired[index].style.border = "";
  span[index].style.display = "none";
}

function emailValidate() {
  if (!emailRegex.test(inputsRequired[0].value)) {
    setError(0);
  } else {
    removeError(0);
  }
}

function mainPasswordValidate() {
  if (inputsRequired[1].value.length < 8) {
    setError(1);
  } else {
    removeError(1);
  }
}

formEmail.addEventListener("input", emailValidate);
formPassword.addEventListener("input", mainPasswordValidate);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
