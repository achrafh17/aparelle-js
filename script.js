const logo = document.querySelector("#eror");
const message = document.querySelector("#eror-message");
const button = document.querySelector("button");
const input = document.querySelector("input");
const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateEmail() {
  if (!emailpattern.test(input.value)) {
    logo.style.display = "flex";
    message.style.display="flex";
}else {
    logo.style.display = "none";
    message.style.display = "none";
  }
}
button.addEventListener("click", validateEmail);
