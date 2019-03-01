// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
const contenu = document.getElementById("contenu");
const dictionnaire = document.createElement("dl");
contenu.appendChild(dictionnaire);

mots.forEach(mot => {
  // const def = document.createElement("dl");
  // def.innerText = mot
  const terme = document.createElement("dt");
  terme.innerHTML = `<strong>${mot.terme}</strong>`;
  dictionnaire.appendChild(terme);
  const definition = document.createElement("dd");
  definition.textContent = mot.definition;
  terme.appendChild(definition);
})
