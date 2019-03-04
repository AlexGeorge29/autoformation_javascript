const button = document.getElementById("clic");
const compteur = document.getElementById("compteurClics");
var number = 0;
button.addEventListener("click", (event) => {
  number += 1
  compteur.innerText = number;
});
