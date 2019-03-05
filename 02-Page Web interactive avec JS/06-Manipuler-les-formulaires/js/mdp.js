// 1 Les deux mots de passe saisis doivent être identiques.
// 2 Leur longueur doit être au minimum de 6 caractères.
// 3 Ils doivent contenir au moins un chiffre.

// Definition des variables
const info = document.getElementById("infoMdp");
const message = document.createElement("p");
info.appendChild(message);
// Fonction min 6 cractères et cnotient au moisn un chiffre
function mdpVerification(mdp) {
  document.getElementById("mdp").addEventListener("input", (event) => {
    if (event.target.value.length < 6) {

      message.textContent = "Mot de passe trop court";
    } else if (event.target.value != [0-9] ) {
      message.textContent = "ne contient pas de chiffre";
    }
    else {
      message.textContent = "";
    };
  });
};
// fonction mdp1 et mdp2 sont identiques
// function sameMdp() {


  document.getElementById("mdp1").addEventListener("input", (event) => {
    document.getElementById("mdp2").addEventListener("input", (e) => {
    console.log(event.target.value)
    console.log(e.target.value)
    });
  });

// }

// sameMdp();
