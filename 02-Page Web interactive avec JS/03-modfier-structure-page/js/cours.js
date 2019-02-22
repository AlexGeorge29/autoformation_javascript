// creation de l'element
let footer = document.createElement("p");
const part1 = document.createTextNode("En voici une ");
const part2 = document.createTextNode(" plus complète!")
let lien = document.createElement("a");
lien.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lien.textContent = "liste";
nt.getElementById("contenu").appendChild(lien);
document.getElementById("contenu").insertAdjacentElement("afterend",
    footer);
footer.appendChild(part1)
footer.appendChild(lien)
footer.appendChild(part2)
