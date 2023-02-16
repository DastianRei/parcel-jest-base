import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numeroM");
const second = document.querySelector("#segundo-numeroM");
const form = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-divM");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
