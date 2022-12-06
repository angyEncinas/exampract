import sumar from "./sumador";

const publicacion = document.querySelector("#publicacion");
const form = document.querySelector("#twitter-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tweet = publicacion.value;


  div.innerHTML = "<p>" + tweet + "</p>";
});
