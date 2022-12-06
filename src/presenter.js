import sumar from "./sumador";

const publicacion = document.querySelector("#publicacion");
const form = document.querySelector("#twitter-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#advertencia-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tweet = publicacion.value;

  div.innerHTML = "<p>" + tweet + "</p>";
  if(tweet == " "){
    div2.innerHTML = "<p>" + "No se puede ingresar un post sin Texto" + "</p>";
  }
});
