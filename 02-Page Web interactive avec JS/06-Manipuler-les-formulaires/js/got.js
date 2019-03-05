// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}


// Renvoie des options
const selection = document.getElementById("maison");
maisons.forEach((maison) => {
  const option = document.createElement("option");
  option.value = maison.code;
  option.textContent = maison.nom;
  selection.appendChild(option);
})

const tableau = document.getElementById("persos");

document.getElementById("maison").addEventListener("change", function (event) {
    var persosElt = document.getElementById("persos");
    persosElt.innerHTML = ""; // Vidage de la liste
    const code = event.target.value;
    getPersonnages(code).forEach((perso) => {
      const membreFamille = document.createElement("li");
      membreFamille.textContent = perso;
      tableau.appendChild(membreFamille);
    });
});

