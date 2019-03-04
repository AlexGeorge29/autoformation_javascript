const button = document.getElementById("clic");
const compteur = document.getElementById("compteurClics");
const desactiver = document.getElementById("desactiver");
var number = 0;
button.addEventListener("click", (event) => {
  number += 1
  compteur.innerText = number;
});

desactiver.addEventListener("click", (event) => {
  if (button.disabled == true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
