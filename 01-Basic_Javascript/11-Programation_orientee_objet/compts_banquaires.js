// Reprenons le contexte des comptes en banque issu d'un précédent exercice. Un compte bancaire sera modélisé par une classe
 // définie comme suit :

// Une propriété titulaire initialisée par le constructeur.
// Une propriété solde valant initialement 0.
// Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
// Une méthode decrire() renvoyant la description du compte.
// Ecrivez un programme qui crée 3 comptes bancaires, l'un appartenant à Alex, le deuxième à CLovis et le troisième à Marco.
// Stockez ces comptes dans un tableau.

// Ensuite, le programme crédite 1000 € et affiche la description de chacun des comptes.

class Compte {
  constructor(name) {
    this.titulaire = name;
    this.solde = 0;
  }

  crediter(montant) {
    this.solde += montant;
  }
  decrire() {
    return `Le comptes de ${this.titulaire} a un solde de ${this.solde}`;
  }
}

function afficherComptes(tabs) {
  tabs.forEach(compte => {
    console.log(compte.decrire());
  });
}
const comptes = [new Compte("Alex"), new Compte("Clovis"), new Compte("Marco")];
console.log("etat initial")
afficherComptes(comptes);

comptes.forEach(compte => {
  compte.crediter(1000);
});
console.log("créditer de 1000")
afficherComptes(comptes);
