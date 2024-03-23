let password = document.querySelector("#password");
let password1 = document.querySelector("#password1");
let passwordMatchDisplay = document.querySelector(":root").style;

document.addEventListener("DOMContentLoaded", () => {
  password.classList.add("error");
  password1.classList.add("error");
});

password.addEventListener("input", () => {
  if (password.value === password1.value) {
    password.classList.remove("error");
    password1.classList.remove("error");
    passwordMatchDisplay.setProperty("--password-match-display", "none");
  } else {
    password.classList.add("error");
    password1.classList.add("error");
    passwordMatchDisplay.setProperty("--password-match-display", "block");
  }
});
password1.addEventListener("input", () => {
  if (password.value === password1.value) {
    password.classList.remove("error");
    password1.classList.remove("error");
    passwordMatchDisplay.setProperty("--password-match-display", "none");
  } else {
    password.classList.add("error");
    password1.classList.add("error");
    passwordMatchDisplay.setProperty("--password-match-display", "block");
  }
});
