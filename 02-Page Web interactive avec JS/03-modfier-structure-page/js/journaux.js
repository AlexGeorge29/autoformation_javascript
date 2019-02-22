// Liste des journaux
let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
journaux.forEach(journal => {
  const item = document.createElement("li");
  const journalElement = document.createElement("a");
  journalElement.href = journal;
  journalElement.textContent = journal;
  document.getElementById("contenu").insertAdjacentElement("beforeend",
    item);
  item.appendChild(journalElement);
});
