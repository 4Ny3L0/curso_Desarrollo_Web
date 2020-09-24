(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    let entradas = document.querySelector("#sidebar ul");
    let entradaNueva = document.createElement("LI");
    let enlace = document.createElement("A");
    let texto = document.createTextNode("Entrada 6");
    entradaNueva.appendChild(enlace).appendChild(texto);
    entradas.appendChild(entradaNueva);
    enlace.setAttribute("href", "#");
  });
})();
