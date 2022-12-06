
const publicacion = document.querySelector("#publicacion");
const form = document.querySelector("#twitter-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#advertencia-div");
var publicaciones = "";
form.addEventListener("submit", (event) => {
  event.preventDefault();

  var tweet = publicacion.value;

  
  if(tweet == " "){
    div2.innerHTML = "<p>" + "No se puede ingresar un post sin Texto" + "</p>";
  }
  else{
    publicaciones = publicaciones + tweet + "<br>";

  }
  div.innerHTML = "<p>" + publicaciones + "</p>";
});
