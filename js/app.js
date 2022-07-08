const buttons = document.querySelectorAll("button");
const popups = document.querySelectorAll(".popup");
const spans = document.querySelectorAll(".button-animation");

console.log(buttons);
console.log(popups);

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    console.log(i);
    popups[i].classList.toggle("active");
    spans[i].classList.toggle("active-btn");
  });
});
