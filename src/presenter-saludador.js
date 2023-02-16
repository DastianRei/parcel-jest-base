import sumar from "./sumador";

const nombre = document.querySelector("#primer-nombre");
const edad = document.querySelector("#edad");
const genero = document.querySelector("#genero");

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#saludador-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + "Hola " + nombre.value + edad.value + genero.value + "</p>";
});
